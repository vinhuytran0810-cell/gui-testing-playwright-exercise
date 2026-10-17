# Bài tập thực hành: Kiểm thử GUI trang Login bằng Playwright

**Thời gian:** 20 phút  
**Hình thức:** Làm theo cặp  
**Website:** https://www.saucedemo.com/  
**Công cụ:** Playwright

## 1. Tình huống

Bạn là tester được giao kiểm tra **GUI của trang Login** trước buổi demo sản phẩm.

Nhiệm vụ của bạn là hoàn thiện một script Playwright để kiểm tra:

- các thành phần chính có hiển thị đúng hay không;
- trạng thái của các control có đúng hay không;
- GUI có hiển thị đúng thông báo lỗi khi thiếu dữ liệu hay không;
- thông báo lỗi có biến mất sau khi người dùng đóng hay không.

> **Phạm vi:** Bài này chỉ kiểm tra trạng thái và phản hồi của GUI. Không kiểm tra đăng nhập thành công, thuật toán xác thực, session, API, database hoặc logic backend.

---

## 2. Yêu cầu cần kiểm tra

### GUI-01 — Trạng thái ban đầu

Khi mở trang Login:

1. Ô **Username** phải hiển thị.
2. Ô **Password** phải hiển thị.
3. Ô Password phải có `type="password"`.
4. Nút **Login** phải hiển thị và ở trạng thái enabled.
5. Banner lỗi chưa được hiển thị.

### GUI-02 — Thiếu Username

Khi để trống Username và Password rồi nhấn **Login**:

```text
Epic sadface: Username is required
```

phải được hiển thị.

### GUI-03 — Thiếu Password

Khi nhập:

```text
Username = standard_user
Password = (để trống)
```

rồi nhấn **Login**, thông báo sau phải được hiển thị:

```text
Epic sadface: Password is required
```

### GUI-04 — Đóng thông báo lỗi

Sau GUI-02 hoặc GUI-03, khi nhấn nút **X**, banner lỗi phải biến mất.

> `standard_user` là tài khoản demo công khai. Bài này không cần sử dụng mật khẩu hợp lệ.

---

## 3. Việc cần làm

Mở file:

```text
tests/login-gui.spec.ts
```

và hoàn thành các vị trí `TODO`.

### Phần A — Trạng thái ban đầu

Hoàn thành các assertion để kiểm tra GUI-01:

- Username visible;
- Password visible;
- Password có `type="password"`;
- Login visible và enabled;
- error banner hidden hoặc chưa tồn tại.

### Phần B — Data-driven GUI validation

Hai trường hợp GUI-02 và GUI-03 đã được cung cấp dưới dạng test data.

Hãy dùng **cùng một logic test** cho cả hai trường hợp, không viết hai đoạn test giống nhau.

Trong mỗi lần chạy cần kiểm tra:

1. error banner hiển thị;
2. nội dung error đúng với `data.expected`;
3. nhấn nút X;
4. error banner biến mất.

### Phần C — Chạy test

Chạy:

```bash
npm test
```

Kết quả mong đợi:

```text
3 passed
```

Nếu test fail, đọc phần `Expected` / `Received` để xác định TODO nào chưa đúng. Không xóa assertion hoặc thay đổi expected chỉ để làm test PASS.

---

## 4. Cheat sheet

### Kiểm tra hiển thị

```ts
await expect(locator).toBeVisible();
```

### Kiểm tra không hiển thị

```ts
await expect(locator).toBeHidden();
```

### Kiểm tra enabled

```ts
await expect(locator).toBeEnabled();
```

### Kiểm tra attribute

```ts
await expect(locator).toHaveAttribute('type', 'password');
```

### Kiểm tra chính xác nội dung text

```ts
await expect(locator).toHaveText('Expected text');
```

### Click

```ts
await locator.click();
```

---

## 5. Sản phẩm cần có

- File `tests/login-gui.spec.ts` đã hoàn thành.
- Kết quả chạy test hiển thị **3 passed**; nếu chưa pass, giữ nguyên kết quả lỗi để cùng phân tích khi chữa bài.

---

## 6. Thang điểm tham khảo

| Nội dung | Điểm |
|---|---:|
| GUI-01: kiểm tra đầy đủ trạng thái ban đầu | 3 |
| Dùng chung logic cho hai bộ dữ liệu | 2 |
| Kiểm tra error visible và đúng nội dung | 3 |
| Đóng banner và kiểm tra hidden | 2 |
| **Tổng** | **10** |

---

## 7. Nếu làm xong sớm — không bắt buộc

Đổi tạm **một** giá trị `expected` thành chuỗi sai và chạy lại test.

Quan sát thông báo `Expected` / `Received`, sau đó khôi phục expected đúng.

Mục đích của phần này là thấy rằng **test FAIL có thể đến từ expected sai trong test**, không phải lúc nào cũng là bug của website.
