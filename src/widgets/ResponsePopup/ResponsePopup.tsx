import FormTextInput from "@/shared/UI/FormInput/FormTextInput";
import RegisteredTextArea from "@/shared/UI/RegisteredTextArea/RegisteredTextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { forwardRef, Ref, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import responseFormSchema from "./model/responseValidation";
import { POST } from "@/shared/api/POST";
import useBlockScroll from "@/shared/hooks/useBlockScroll";
import PopupCloseButton from "@/shared/UI/PopupCloseButton/PopupCloseButton";
import useHideCartButton from "@/shared/hooks/useHideCartButton";

interface IResponseForm {
  email: string;
  comment: string;
}

interface IResponsePopup{
  setPopup : React.Dispatch<SetStateAction<boolean>>
}
const ResponsePopup = forwardRef(({setPopup}: IResponsePopup, ref: Ref<HTMLFormElement>) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IResponseForm>({
    resolver : zodResolver(responseFormSchema),
    defaultValues : {
        comment : "",
        email : ""
    }
  });

  const onSubmit = handleSubmit( async (data : IResponseForm) => {
    setPopup(false)
    const response = await POST({endpoint : "/sendemail", data : {
      message: `
        <div style="font-family: Inter, sans-serif;">
          <h2>Это отзыв на Smartcardio</h2>
          <p><strong>От:</strong> ${data.email}</p>
          <p><strong>Сам отзыв:</strong> ${data.comment}</p>
        </div>
      `
    }})

  })

  useBlockScroll()

  useHideCartButton()


  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className="w-[100%]  fixed flex justify-center top-0 left-0 z-40 overflow-y-scroll h-[100vh]"
    >


      <div className="flex w-[100%] h-fit z-50 relative justify-center">

        <div onClick={() => setPopup(false)} className="absolute bg-black top-0 left-0 w-[100%] h-[100%] opacity-50 z-30" />

        <PopupCloseButton setPopup={setPopup}  />

        <div className="flex-col  my-auto gap-10  md:mt-10 md:mb-10 h-max rounded-3xl w-[100%] max-w-[800px] md:w-[90%] lg:w-[70%] xl:w-[50%] flex relative z-50 bg-white px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-12">
          <div className="flex flex-col gap-2 items-center w-[100%] justify-center">
              <h2 className="mid-title text-black">Служба поддержки / отзыв</h2>
              <p className="big-p">Отвечаем в течение суток</p>
          </div>

          <FormTextInput
            labelText="Ваш email:"
            name="email"
            register={register}
            error={errors.email}
            placeholder="Введите ваш email"
          />
          <RegisteredTextArea placeholder="Введите ваше сообщение" control={control} error={errors.comment} name="comment" register={register} title="Ваше сообщение:" maxLength={500}  />
          <input
            className=" !bg-black text-white p-2 big-p w-[100%] mx-auto rounded-md"
            type="submit"
            value={"Отправить"}
          />
        </div>

      </div>
    </form>
  );
});

export default ResponsePopup;
