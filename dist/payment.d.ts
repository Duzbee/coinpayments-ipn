import { ApiIPN } from './ipn/api';
import { AdvancedButtonIPN } from './ipn/button';
import { CartIPN } from './ipn/cart';
import { DespositIPN, DepositPaymentFields } from './ipn/deposit';
import { DonationButtonIPN } from './ipn/donation';
import { SimpleButtonIPN } from './ipn/simple';
import { WithdrawalIPN } from './ipn/withdrawal';
import { PaymentStatusFields, CoinpaymentsIPN } from './types';
declare function isPaymentSuccessful(verifiedIpn: ApiIPN): verifiedIpn is ApiIPN & Required<PaymentStatusFields>;
declare function isPaymentSuccessful(verifiedIpn: SimpleButtonIPN): verifiedIpn is SimpleButtonIPN & Required<PaymentStatusFields>;
declare function isPaymentSuccessful(verifiedIpn: AdvancedButtonIPN): verifiedIpn is AdvancedButtonIPN & Required<PaymentStatusFields>;
declare function isPaymentSuccessful(verifiedIpn: CartIPN): verifiedIpn is CartIPN & Required<PaymentStatusFields>;
declare function isPaymentSuccessful(verifiedIpn: DonationButtonIPN): verifiedIpn is DonationButtonIPN & Required<PaymentStatusFields>;
declare function isPaymentSuccessful(verifiedIpn: DespositIPN): verifiedIpn is DespositIPN & Required<DepositPaymentFields>;
declare function isPaymentSuccessful(verifiedIpn: WithdrawalIPN): verifiedIpn is WithdrawalIPN;
declare const isPaymentPending: (verifiedIpn: CoinpaymentsIPN) => boolean;
declare const isPaymentUnsuccessful: (verifiedIpn: CoinpaymentsIPN) => boolean;
declare function isPaymentComplete(verifiedIpn: ApiIPN): verifiedIpn is (ApiIPN & Required<PaymentStatusFields>) | ApiIPN;
declare function isPaymentComplete(verifiedIpn: SimpleButtonIPN): verifiedIpn is (SimpleButtonIPN & Required<PaymentStatusFields>) | SimpleButtonIPN;
declare function isPaymentComplete(verifiedIpn: AdvancedButtonIPN): verifiedIpn is (AdvancedButtonIPN & Required<PaymentStatusFields>) | AdvancedButtonIPN;
declare function isPaymentComplete(verifiedIpn: CartIPN): verifiedIpn is (CartIPN & Required<PaymentStatusFields>) | CartIPN;
declare function isPaymentComplete(verifiedIpn: DonationButtonIPN): verifiedIpn is (DonationButtonIPN & Required<PaymentStatusFields>) | DonationButtonIPN;
declare function isPaymentComplete(verifiedIpn: DespositIPN): verifiedIpn is (DespositIPN & Required<DepositPaymentFields>) | DespositIPN;
declare function isPaymentComplete(verifiedIpn: WithdrawalIPN): verifiedIpn is WithdrawalIPN;
export { isPaymentSuccessful, isPaymentPending, isPaymentUnsuccessful, isPaymentComplete };
