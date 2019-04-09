import { Selector, ClientFunction } from 'testcafe';


fixture `Test Page`
    .page `https://www.kupujemprodajem.com/`;

    const getLocation = ClientFunction(() => window.location.href);
    const setAdv = Selector('.submitAd').withText('Postavi oglas ►');
    const entryEmail = Selector('input').withAttribute('name', 'data[email]');
    const entryPassword = Selector('input').withAttribute('name', 'data[password]');
    const submitLogin = Selector('input').withAttribute('value', 'Ulogujte se');
    const submitKind = Selector('input').withAttribute('name', 'data[ad_kind]');
    const submitItem = Selector('.uiMenuItem').withAttribute('data-index', '8');
    const submitFreez = Selector('.uiMenuItem').withAttribute('data-text', 'Frižideri');
    const nameFreez = Selector('input').withAttribute('name', 'data[name]');
    const condition = Selector('input').withAttribute('value', 'used');
    const price = Selector('input').withAttribute('name', 'data[price]');
    const currency = Selector('input').withAttribute('name', 'data[currency]');
    const content = Selector('iframe').withAttribute('title', 'Rich Text AreaPress ALT-F10 for toolbar. Press ALT-0 for help');
    const italicB = Selector('span').withAttribute('class', 'mce_bold');
    const pointer = Selector('.mceContentBody ');

    // const getSaleAmount = ClientFunction(() => {
    //     const elements = document.querySelector('.dx-datagrid-rowsview').querySelectorAll('td:nth-child(3),td:nth-child(7)');
    //     const array = [];

    //     for (let i = 0; i <= elements.length - 2; i+=2) {
    //         const customerName  = elements[i+1].textContent;
    //         const saleAmount = elements[i].textContent;

    //         if (customerName && saleAmount)
    //             array.push(`Customer ${customerName}: ${saleAmount}`);
    //     }

    //     return array;
    // });
    
    test(`Complete test`, async t => {

        await t
            .setTestSpeed(0.9)
            .expect(getLocation()).contains('kupujem')
            .click(setAdv)
            .typeText(entryEmail, 'miric')
            .typeText(entryEmail, 'niolamiric@yahoo.com', { replace: true })
            .typeText(entryEmail, 'k', { caretPos: 2 })
            .expect(entryEmail.value).eql('nikolamiric@yahoo.com')
            .typeText(entryPassword, 'nikola4444')
            .click(submitLogin)
            .click(submitKind)
            .click(submitItem)
            .click(submitFreez)
            .click(nameFreez)
            .typeText(nameFreez, 'Polovni frizider')
            .click(condition)
            .click(price)
            .typeText(price, '50000')
            .click(currency)
            .hover(content)
            .click(content)
            .switchToIframe(Selector('iframe').withAttribute('title', 'Rich Text AreaPress ALT-F10 for toolbar. Press ALT-0 for help'))
            // .typeText(Selector('#tinymce').withAttribute('dir', 'ltr'), 'Test test') // Ne moze da pristupi preko Selectora #tinymce,niti bilo kog drugog
            .navigateTo('https://www.tiny.cloud/')
            .wait(5000)
            .switchToMainWindow();
                   
    });

