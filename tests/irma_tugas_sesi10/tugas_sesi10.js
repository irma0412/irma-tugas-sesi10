const { Builder, By, Options } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const assert = require('assert');

// Deklarasi variabel di luar agar bisa diakses di semua hook dan test
let driver;
let options;

describe('Pengujian Fitur SauceDemo', function () {
    // Tambahan beforeEach untuk membuka browser tiap case
    beforeEach(async function () {
        console.log('BeforeEach membuka browser baru');
        options = new chrome.Options();   
        options.addArguments('--incognito');

        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        await driver.manage().window().maximize();
    });
    // Tambahan afterEach untuk menutup browser setiap selesai melakukan case
    afterEach(async function () {
        console.log('AfterEach menutup browser');
        await driver.quit();
    });

    // Test Case 1: Login Berhasil
    it('Login berhasil', async function () {
        
        console.log('Buka halaman saucedemo');
        await driver.get('https://www.saucedemo.com/');

        console.log('Masukkan username dan password');
        const input_username = await driver.findElement(By.xpath('//*[@id="user-name"]'));
        const input_password = await driver.findElement(By.xpath('//*[@id="password"]'));
        const button_login = await driver.findElement(By.xpath('//*[@id="login-button"]'));

        await input_username.sendKeys('standard_user');
        await sleep(1000);
        await input_password.sendKeys('secret_sauce');
        await sleep(1000);

        console.log('Klik tombol login');
        await button_login.click();
        await sleep(3000);

        console.log('Validasi URL setelah login');
        const urlSekarang = await driver.getCurrentUrl();
        assert.strictEqual(urlSekarang, 'https://www.saucedemo.com/inventory.html', 'Tidak masuk ke halaman inventory setelah login!');
        console.log('Berhasil masuk ke halaman inventory.');

        
    });

    // Test Case 2: Sortir Produk Z ke A
    it('Sortir produk dari Z ke A', async function () {
  
        console.log('Buka halaman saucedemo');
        await driver.get('https://www.saucedemo.com/');

        console.log('Masukkan username dan password');
        const input_username = await driver.findElement(By.xpath('//*[@id="user-name"]'));
        const input_password = await driver.findElement(By.xpath('//*[@id="password"]'));
        const button_login = await driver.findElement(By.xpath('//*[@id="login-button"]'));

        await input_username.sendKeys('standard_user');
        await sleep(1000);
        await input_password.sendKeys('secret_sauce');
        await sleep(1000);

        console.log('Klik tombol login');
        await button_login.click();
        await sleep(3000);

        console.log('Validasi URL setelah login');
        const urlSekarang = await driver.getCurrentUrl();
        assert.strictEqual(urlSekarang, 'https://www.saucedemo.com/inventory.html', 'Tidak masuk ke halaman inventory setelah login!');

        console.log('Sortir produk dari Z ke A');
        const dropdown = await driver.findElement(By.className('product_sort_container'));
        await dropdown.click();
        await sleep(1000);

        const pilih_ZA = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'));
        await pilih_ZA.click();
        await sleep(2000);

        console.log('Sortir produk berhasil dilakukan.');

      
    });
});
