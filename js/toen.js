document.addEventListener('DOMContentLoaded', function () {
    const { defaultEncoding } = GLOBAL_CONFIG.translate
    const targetEncodingCookie = 'translate-chn-cht'
    let targetEncoding =
        saveToLocal.get(targetEncodingCookie) === undefined
            ? defaultEncoding
            : Number(saveToLocal.get('translate-chn-cht'))


    function setLang() {
        document.documentElement.lang = targetEncoding === 1 ? 'en' : 'zh-CN'
    }