# Bài tập thực hành: Kiểm thử GUI trang Login bằng Playwright

**Thời gian:** 30 phút  
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

---

## 4. Sản phẩm cần có

- File `tests/login-gui.spec.ts` đã hoàn thành.
- Kết quả chạy test hiển thị **3 passed**; nếu chưa pass, giữ nguyên kết quả lỗi để cùng phân tích khi chữa bài.