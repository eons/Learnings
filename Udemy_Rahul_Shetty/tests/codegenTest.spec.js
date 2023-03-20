import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).fill('amazon mx');
  await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
  await page.getByRole('link', { name: 'Compra Amazon.com.mx - Sitio oficial de Amazon.com.mx Anuncio· https://www.amazon.com.mx/' }).click();
  await page.getByPlaceholder('Buscar Amazon.com.mx').click();
  await page.getByPlaceholder('Buscar Amazon.com.mx').fill('guantes');
  await page.getByPlaceholder('Buscar Amazon.com.mx').press('Enter');
  await page.locator('#anonCarousel3').getByRole('link', { name: 'Gorro Invierno Bufanda y Guantes Tactiles,Gorros con Tejido de Punto y Bufandas con Forro de Lana para Hombres y Mujeres,S...' }).click();
  await page.getByRole('heading', { name: 'Gorro Invierno Bufanda y Guantes Tactiles,Gorros con Tejido de Punto y Bufandas con Forro de Lana para Hombres y Mujeres,Set de bufanda, Gorro y Guantes para Esquiar' }).getByText('Gorro Invierno Bufanda y Guantes Tactiles,Gorros con Tejido de Punto y Bufandas ').click();
});