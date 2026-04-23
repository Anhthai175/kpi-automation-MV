# Hệ thống Quản lý KPI và Task - Phòng Tự Động Hóa MACH VIET CNC

## Mô tả
Hệ thống web quản lý và theo dõi KPI của các thành viên phòng Tự Động Hóa tại MACH VIET CNC, bao gồm module quản lý task với đầy đủ tính năng.

## Tính năng

### KPI Management
- Hiển thị danh sách thành viên với thông tin cá nhân
- Bảo mật bằng mật khẩu cho từng thành viên
- Giao diện hiện đại với tab KPI chi tiết
- Responsive design cho mobile và desktop
- Chế độ xem tất cả KPI cho quản lý

### Task Management
- **Authentication**: Hệ thống đăng nhập với phân quyền
- **CRUD Operations**: Tạo, đọc, cập nhật, xóa nhiệm vụ
- **Role-based Access**: Admin vs Employee permissions
- **Filtering & Search**: Lọc theo trạng thái, nhân viên, tìm kiếm
- **Status Tracking**: Theo dõi tiến độ với màu sắc trực quan
- **Due Date Alerts**: Cảnh báo nhiệm vụ quá hạn
- **Local Storage**: Lưu trữ dữ liệu local (demo)

## Cách chạy
1. Mở file `index.html` trong trình duyệt web
2. **Xem KPI**: Nhấn "Xem KPI" trên card thành viên → nhập mật khẩu
3. **Quản lý Task**: Nhấn "Đăng nhập" → sử dụng tài khoản admin → "Quản lý Task"

## Tài khoản đăng nhập

### KPI Access (thành viên):
- Lê Văn Thái: `kpi1`
- Lê Quốc Việt: `kpi2`
- Nguyễn Tiến Dương: `kpi3`
- Bùi Đắc Ngọc: `kpi4`
- R&D mạch điện tử: `kpi5`

### Admin Access (quản lý):
- Trưởng phòng: `admin1`
- Giám đốc: `admin2`

### Task Management Accounts:

#### Admin:
- **Username**: admin, **Password**: admin123 (Quản trị viên)
- **Username**: truongphong, **Password**: tp123 (Lê Văn Thái)
- **Username**: giamdoc, **Password**: gd123 (Giám đốc)

#### Employee:
- **Username**: levanthai, **Password**: nv123 (Lê Văn Thái)
- **Username**: lequocviet, **Password**: nv123 (Lê Quốc Việt)
- **Username**: nguyentienduong, **Password**: nv123 (Nguyễn Tiến Dương)
- **Username**: buidacngoc, **Password**: nv123 (Bùi Đắc Ngọc)
- **Username**: rnd, **Password**: nv123 (R&D mạch điện tử)

*Admin có thể tạo/sửa/xóa tất cả task. Employee chỉ xem và cập nhật task được giao.*

## Cách tùy chỉnh

### Thay đổi mật khẩu KPI
Chỉnh sửa object `passwords` trong `script.js`:
```javascript
const passwords = {
    1: "mật khẩu mới",
    2: "mật khẩu mới",
    // ...
};
```

### Thay đổi mật khẩu Task
Chỉnh sửa object `users` trong class `TaskManager`:
```javascript
const users = {
    'username': { password: 'newpass', role: 'admin', name: 'Display Name' },
    // ...
};
```

### Tùy chỉnh thông tin
- **Thành viên**: Sửa trong `index.html`
- **Ảnh đại diện**: Thay `src` trong thẻ `<img>`
- **KPI chi tiết**: Sửa nội dung `tab-pane`
- **Màu sắc**: Chỉnh sửa `styles.css`

## Cấu trúc file
```
├── index.html      # HTML chính
├── styles.css      # CSS styling
├── script.js       # JavaScript logic
├── README.md       # Tài liệu này
├── test.html       # File test
└── Avatar/         # Ảnh đại diện
    ├── LeVanThai.jpg
    └── ...
```

## Công nghệ
- **HTML5**: Structure
- **CSS3**: Modern styling với gradients, animations
- **JavaScript ES6+**: Logic, DOM manipulation
- **localStorage**: Data persistence (demo)

## Lưu ý kỹ thuật
- Dữ liệu lưu trong localStorage (reset khi clear browser data)
- Không có backend (phiên bản demo)
- Responsive design
- Modal dialogs cho UX tốt

## Phát triển production
1. Thay localStorage bằng database
2. Implement server authentication
3. Thêm API endpoints
4. Cải thiện security
5. Thêm email notifications

## Liên hệ
Phòng Tự Động Hóa - MACH VIET CNC
© 2026