import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('GUI-01: Trạng thái ban đầu của form', async ({ page }) => {
  const username = page.getByPlaceholder('Username', { exact: true });
  const password = page.getByPlaceholder('Password', { exact: true });
  const login = page.getByRole('button', { name: 'Login', exact: true });

  // TODO 1: Kiểm tra username và password đều hiển thị (2 assertion).
  // TODO 2: Kiểm tra password có attribute type="password".
  // TODO 3: Kiểm tra Login hiển thị VÀ enabled (2 assertion).
  // TODO 4: Kiểm tra banner [data-test="error"] đang ẩn/không tồn tại.
  throw new Error('Chưa hoàn thành GUI-01: thay dòng này bằng các assertion TODO.');
});

// Hai bộ dữ liệu kiểm tra PHẢN HỒI HIỂN THỊ khi thiếu dữ liệu.
// Không kiểm tra xác thực tài khoản, session, API hoặc cơ sở dữ liệu.
const cases = [
  {
    id: 'GUI-02', username: '', password: '',
    expected: 'Epic sadface: Username is required'
  },
  {
    id: 'GUI-03', username: 'standard_user', password: '',
    expected: 'Epic sadface: Password is required'
  }
];

for (const data of cases) {
  test(`${data.id}: Thông báo và trạng thái đóng lỗi`, async ({ page }) => {
    await page.getByPlaceholder('Username', { exact: true }).fill(data.username);
    await page.getByPlaceholder('Password', { exact: true }).fill(data.password);
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    const banner = page.locator('[data-test="error"]');

    // TODO 5: Kiểm tra banner hiển thị.
    // TODO 6: Kiểm tra toàn bộ nội dung banner bằng data.expected.
    // TODO 7: Click [data-test="error-button"], rồi kiểm tra banner ẩn.
    throw new Error('Chưa hoàn thành phần thông báo: thay dòng này bằng các TODO.');
  });
}
