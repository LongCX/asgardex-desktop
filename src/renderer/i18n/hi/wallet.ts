import { WalletMessages } from '../types'

const wallet: WalletMessages = {
  'wallet.name': 'वॉलेट का नाम',
  'wallet.name.maxChars': 'अधिकतम {max} अक्षर',
  'wallet.name.error.empty': 'कृपया अपने वॉलेट के लिए एक नाम दर्ज करें',
  'wallet.name.error.duplicated': 'नाम पहले से मौजूद है, कृपया दूसरा नाम उपयोग करें।',
  'wallet.name.error.rename': 'वॉलेट का नाम बदलने में त्रुटि',
  'wallet.nav.deposits': 'जमा',
  'wallet.nav.bonds': 'बॉन्ड',
  'wallet.nav.poolshares': 'LP शेयर',
  'wallet.nav.savers': 'सेवर्स',
  'wallet.nav.runepool': 'रून पूल',
  'wallet.column.name': 'नाम',
  'wallet.column.ticker': 'टिकर',
  'wallet.action.send': 'भेजें',
  'wallet.action.receive': 'प्राप्त करें',
  'wallet.action.receive.title': '{asset} प्राप्त करें',
  'wallet.action.forget': 'भूल जाएं',
  'wallet.action.unlock': 'अनलॉक करें',
  'wallet.action.connect': 'कनेक्ट करें',
  'wallet.action.import': 'आयात करें',
  'wallet.action.create': 'बनाएं',
  'wallet.action.deposit': 'जमा करें',
  'wallet.balance.total.poolAssets': 'वॉलेट संपत्तियों का कुल बैलेंस',
  'wallet.balance.total.poolAssets.info':
    'Thorchain और Mayachain के पूल डेटा का उपयोग करके वॉलेट संपत्तियों का कुल बैलेंस। THORChain और MAYAchain पर कीमतें निर्धारित करने के लिए पूल सत्य के स्रोत हैं।',
  'wallet.balance.total.tradeAssets': 'व्यापार परिसंपत्तियों का कुल शेष',
  'wallet.balance.total.tradeAssets.info':
    'थॉरचेन से पूल डेटा का उपयोग करते हुए व्यापार परिसंपत्तियों का कुल शेष। थॉरचेन पर कीमतें निर्धारित करने के लिए पूल सत्य का स्रोत हैं',
  'wallet.shares.total': 'कुल मूल्य',
  'wallet.connect.instruction': 'कृपया अपना वॉलेट कनेक्ट करें',
  'wallet.lock.label': 'वॉलेट लॉक करें',
  'wallet.unlock.label': 'वॉलेट अनलॉक करें',
  'wallet.unlock.title': '"{name}" अनलॉक करें',
  'wallet.unlock.instruction': 'कृपया अपना वॉलेट अनलॉक करें',
  'wallet.unlock.password': 'अपना पासवर्ड दर्ज करें',
  'wallet.unlock.error': 'वॉलेट अनलॉक नहीं कर सका। कृपया अपना पासवर्ड जांचें और फिर से प्रयास करें',
  'wallet.imports.keystore.select': 'कीस्टोर फ़ाइल चुनें',
  'wallet.imports.keystore.title': 'कृपया अपने वॉलेट की कीस्टोर फ़ाइल चुनें',
  'wallet.imports.phrase.title': 'कृपया अपने वॉलेट का वाक्यांश शब्दों के बीच एक जगह के साथ दर्ज करें',
  'wallet.imports.wallet': 'मौजूदा वॉलेट आयात करें',
  'wallet.imports.enterphrase': 'वाक्यांश दर्ज करें',
  'wallet.imports.error.instance': 'क्लाइंट की एक इंस्टेंस बनाने में विफल',
  'wallet.imports.error.keystore.load': 'अमान्य कीस्टोर',
  'wallet.imports.error.keystore.import': 'कीस्टोर वॉलेट्स आयात करते समय त्रुटि',
  'wallet.imports.error.ledger.import': 'लेजर खातों को आयात करने की कोशिश में त्रुटि',
  'wallet.imports.error.keystore.password': 'अमान्य पासवर्ड',
  'wallet.phrase.error.valueRequired': 'वाक्यांश के लिए मान आवश्यक है',
  'wallet.phrase.error.invalid': 'अमान्य वाक्यांश',
  'wallet.phrase.error.import': 'वाक्यांश आयात करते समय त्रुटि',
  'wallet.imports.error.phrase.empty': 'इसमें फंड वाले मौजूदा वॉलेट को आयात करें',
  'wallet.txs.history': 'लेन-देन इतिहास',
  'wallet.txs.history.disabled': '{chain} के लिए लेन-देन इतिहास अस्थायी रूप से निष्क्रिय किया गया है',
  'wallet.create.copy.phrase': 'वाक्यांश कॉपी करें',
  'wallet.create.error.phrase.empty': 'नया वॉलेट बनाएं, उसमें फंड जोड़ें',
  'wallet.add.another': 'एक और वॉलेट जोड़ें',
  'wallet.add.label': 'वॉलेट जोड़ें',
  'wallet.change.title': 'वॉलेट बदलें',
  'wallet.change.error': 'वॉलेट बदलते समय त्रुटि',
  'wallet.selected.title': 'चयनित वॉलेट',
  'wallet.create.title': 'नया वॉलेट बनाएं',
  'wallet.create.enter.phrase': 'अपना वाक्यांश सही क्रम में दर्ज करें',
  'wallet.create.error.phrase': 'गलत वाक्यांश। कृपया अपने वाक्यांश की दोबारा जांच करें और फिर से दर्ज करें।',
  'wallet.create.words.click': 'सही क्रम में शब्द पर क्लिक करें',
  'wallet.create.creating': 'वॉलेट बनाया जा रहा है…',
  'wallet.create.error': 'वॉलेट बनाते समय त्रुटि',
  'wallet.receive.address.error': 'फंड प्राप्त करने के लिए कोई पता उपलब्ध नहीं है',
  'wallet.receive.address.errorQR': 'QR कोड रेंडर करते समय त्रुटि: {error}',
  'wallet.remove.label': 'वॉलेट भूल जाएं',
  'wallet.remove.label.title': 'क्या आप वाकई में "{name}" को भूलना चाहते हैं?',
  'wallet.remove.label.description':
    'आपको अपने वॉलेट को पुनः बनाने के लिए अपना वाक्यांश प्रदान करना होगा। कृपया आगे बढ़ने से पहले सुनिश्चित करें कि आपका वाक्यांश सुरक्षित स्थान पर सहेजा गया है।',
  'wallet.send.success': 'लेन-देन सफल रहा।',
  'wallet.send.fastest': 'सबसे तेज़',
  'wallet.send.fast': 'तेज़',
  'wallet.send.affiliateTracking': 'स्वैप मेमो का पता लगा, 10 बीपीएस एफिलिएट फी लागू',
  'wallet.send.notAllowed': 'अनुमति नहीं है',
  'wallet.send.average': 'औसत',
  'wallet.send.fundsLoss': 'इस पते पर भेजने से धन खो जाएगा।',
  'wallet.send.max.doge':
    'अनुमानित शुल्कों के आधार पर गणना किया गया अधिकतम मूल्य, जो कभी-कभी DOGE के लिए गलत हो सकता है। "लेन-देन के लिए बैलेंस अपर्याप्त" त्रुटि संदेश के मामले में https://blockchair.com/dogecoin/transactions पर नवीनतम शुल्कों का औसत प्राप्त करें और लेन-देन भेजने से पहले इसे अपने बैलेंस से घटाने का प्रयास करें।',
  'wallet.errors.balancesFailed': 'बैलेंस लोड करने में विफल। {errorMsg}',
  'wallet.errors.asset.notExist': '{asset} संपत्ति नहीं है',
  'wallet.errors.address.empty': 'पता खाली नहीं हो सकता',
  'wallet.errors.address.invalid': 'पता अमान्य है',
  'wallet.errors.address.inbound': 'सावधानीपूर्वक आने वाला पता पता लगाया गया',
  'wallet.errors.address.couldNotFind': '{pool} पूल पता नहीं मिल सका',
  'wallet.errors.amount.shouldBeNumber': 'राशि एक संख्या होनी चाहिए',
  'wallet.errors.amount.shouldBeGreaterThan': 'राशि {amount} से अधिक होनी चाहिए',
  'wallet.errors.amount.shouldBeGreaterOrEqualThan': 'राशि {amount} के बराबर या अधिक होनी चाहिए',
  'wallet.errors.amount.shouldBeLessThanBalance': 'राशि आपके बैलेंस से कम होनी चाहिए',
  'wallet.errors.amount.shouldBeLessThanBalanceAndFee': 'राशि आपके बैलेंस से शुल्क को घटाकर कम होनी चाहिए',
  'wallet.errors.fee.notCovered': 'शुल्क आपके बैलेंस ({balance}) द्वारा कवर नहीं किया गया है',
  'wallet.errors.invalidChain': 'अमान्य चेन: {chain}',
  'wallet.errors.memo.max': 'मेमो की लंबाई {max} से अधिक नहीं हो सकती',
  'wallet.password.confirmation.title': 'वॉलेट पासवर्ड की पुष्टि',
  'wallet.password.confirmation.description': 'कृपया अपना वॉलेट पासवर्ड दर्ज करें।',
  'wallet.password.confirmation.pending': 'पासवर्ड की पुष्टि जारी',
  'wallet.password.empty': 'कृपया पासवर्ड दर्ज करें',
  'wallet.password.confirmation.error': 'पासवर्ड गलत है',
  'wallet.password.repeat': 'पासवर्ड दोहराएं',
  'wallet.password.mismatch': 'पासवर्ड मेल नहीं खाता',
  'wallet.send.error': 'लेन-देन भेजने में त्रुटि',
  'wallet.validations.lessThen': '{value} से कम होना चाहिए',
  'wallet.validations.graterThen': '{value} से अधिक होना चाहिए',
  'wallet.validations.shouldNotBeEmpty': 'खाली नहीं होना चाहिए',
  'wallet.ledger.verifyAddress.modal.title': 'Ledger पता की पुष्टि करें',
  'wallet.ledger.verifyAddress.modal.description': 'अपने डिवाइस पर पता {address} की पुष्टि करें',
  'wallet.ledger.removeAddress': 'चेन {chain} के लिए लेजर पता हटाएं',
  'wallet.ledger.viewAddress': 'एक्सप्लोरर में पता देखें'
}

export default wallet
