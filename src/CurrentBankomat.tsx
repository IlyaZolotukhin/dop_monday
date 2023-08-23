import React from 'react';
import {MoneyType} from "./App";
import {S} from './_Styleds'

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
            <S.Banknote color={props.money.banknotes === 'Dollars'? "forestgreen":"aqua"}>
                <S.Name>{props.money.banknotes}</S.Name>
                <S.Nominal>{props.money.value}</S.Nominal>
            </S.Banknote>
    );
};

