import { IPN_TYPES_ENUM } from '../constants';
import { BaseIPNFields, PaymentStatusFields, BuyerInformationFields, ShippingInformationFields, CoinpaymentsIPN } from '../types';
export type DepositFields = {
    ipn_type: typeof IPN_TYPES_ENUM.DEPOSIT;
    deposit_id: string;
    txn_id: string;
    address: string;
    dest_tag?: string;
    currency: string;
    confirms: string;
    amount: string;
    amounti: string;
    fiat_coin: string;
    fiat_amount: string;
    fiat_amounti: string;
    label?: string;
};
export type DepositPaymentFields = {
    fee?: string;
    feei?: string;
    fiat_fee?: string;
    fiat_feei?: string;
};
export type DespositIPN = BaseIPNFields & PaymentStatusFields & BuyerInformationFields & ShippingInformationFields & DepositFields & DepositPaymentFields;
export declare const isDepositIPN: (verifiedIPN: CoinpaymentsIPN) => verifiedIPN is DespositIPN;
