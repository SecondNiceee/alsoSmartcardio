type TypePhone = {number : string}

export type TypeOffice = {
    address_comment : string,
    code : string,
    email : string,
    have_cash : string,
    have_cashless : string,
    name : string,
    nearest_metro_station : string,
    nearest_station : string,
    note : string,
    phones : TypePhone[],
    uuid : string,
    work_time : string,
    location : {
        address : string,
        address_full : string,
        city : string,
        city_code : string,
        city_uuid : string,
        country_code: string,
        fias_guid : string,
        latitude : string,
        longitude : string,
        postal_code : string,
        region : string, 
        region_code : string
    }
}