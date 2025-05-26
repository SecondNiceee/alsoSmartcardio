"use client";

import React, { CSSProperties, FC, ReactNode } from "react";
import cl from "./OrderButton.module.scss";
import Link from "next/link";



type TypeAProps = JSX.IntrinsicElements["a"]

interface IOrderButton {
  children: ReactNode;
  onClick?: () => void;
  styles?: CSSProperties;
  className?: string;
  link?: string;
  externalLink?: string;
  externalProps? : TypeAProps
}
function OrderButton({
  onClick,
  styles = {},
  children,
  className = "",
  link,
  externalLink,
  externalProps = {}
}: IOrderButton) {
  return (
    <>
      {link ? (
        <Link
          className={`${cl.orderButton} ${className}`}
          style={styles}
          href={link}
        >
          {" "}
          {children}{" "}
        </Link>
      ) : externalLink ? (
        <a
          {...externalProps}
          download={true}
          target="_blank"

          rel="noopener noreferrer"
          className={`${cl.orderButton} ${className}`}
          style={styles}
          href={externalLink}
        >
          {" "}
          {children}{" "}
        </a>
      ) : (
        <button
          style={styles}
          onClick={onClick}
          onPointerDown={onClick}
          className={`${cl.orderButton} ${className}`}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default React.memo(OrderButton);
