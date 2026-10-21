# Cheat sheet — GUI Testing với Playwright

Website: https://www.saucedemo.com/ • File làm bài: `tests/login-gui.spec.ts`

**Chạy:** `npm test` → mục tiêu **3 passed**. **Xem report:** `npm run report` → Ports → 9323 → Open in Browser. **Đáp án:** `npm run test:solution`.

| Cần làm | Cú pháp |
|---|---|
| Ô Username | `page.getByPlaceholder('Username', { exact: true })` |
| Nút Login | `page.getByRole('button', { name: 'Login', exact: true })` |
| Banner / nút đóng | `page.locator('[data-test="error"]')` / `page.locator('[data-test="error-button"]')` |
| Hiện / ẩn | `await expect(x).toBeVisible()` / `await expect(x).toBeHidden()` |
| Cho tương tác / vô hiệu hóa | `await expect(x).toBeEnabled()` / `await expect(x).toBeDisabled()` |
| Đúng toàn bộ text | `await expect(x).toHaveText(data.expected)` |
| Kiểu ô mật khẩu | `await expect(x).toHaveAttribute('type', 'password')` |
| Click / nhập | `await x.click()` / `await x.fill('text')` |

**Nhớ:** luôn `await` assertion bất đồng bộ; dùng enabled/disabled theo yêu cầu thực tế. `toBeHidden()` chấp nhận cả phần tử không tồn tại. Không cần thêm `waitForTimeout`.

<details>
<summary>Gợi ý 1 — TODO 1–4</summary>

Các biến `username`, `password`, `login` đã có sẵn. Dùng `toBeVisible()` cho từng thành phần; kiểm tra `type` của Password. Login đang enabled. Banner ban đầu không hiện.

</details>

<details>
<summary>Gợi ý 2 — TODO 5–7</summary>

Kiểm tra banner hiện trước, rồi so sánh `data.expected`. Click nút có `data-test="error-button"`, sau đó kiểm tra banner hidden. Viết một lần trong vòng lặp, áp dụng cho hai dòng dữ liệu.

</details>


