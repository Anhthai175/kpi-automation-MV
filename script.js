// JavaScript cho trang KPI

// Dữ liệu quy trình
const quyTrinhData = {
    "trienkhai-duan": {
        title: "Quy trình triển khai dự án",
        mucTieu: "Đảm bảo dự án tự động hóa được triển khai hiệu quả, đúng tiến độ và chất lượng.",
        tongQuanFlow: "Khởi tạo → Phân tích yêu cầu → Thiết kế → Triển khai → Kiểm tra → Nghiệm thu",
        giaiDoan: [
            "Khởi tạo dự án",
            "Phân tích yêu cầu",
            "Thiết kế giải pháp",
            "Triển khai và lắp đặt",
            "Kiểm tra và hiệu chỉnh",
            "Nghiệm thu và bàn giao"
        ],
        buocCongViec: [
            "1. Tiếp nhận yêu cầu từ khách hàng",
            "2. Phân tích kỹ thuật và khả thi",
            "3. Lập kế hoạch chi tiết",
            "4. Thiết kế sơ đồ và lập trình",
            "5. Lắp đặt và cấu hình hệ thống",
            "6. Test và debug",
            "7. Đào tạo và bàn giao"
        ],
        ketQuaDauRa: "Hệ thống tự động hóa hoàn chỉnh, tài liệu kỹ thuật, báo cáo nghiệm thu."
    },
    "phoihop-pkd": {
        title: "QUY TRÌNH PHỐI HỢP PHÒNG TỰ ĐỘNG HÓA – KINH DOANH - KHÁCH HÀNG",

        mucTieu: [
            "Đảm bảo tư vấn kỹ thuật đúng – nhanh – hỗ trợ chốt đơn",
            "Tránh sai sót kỹ thuật gây mất uy tín / phát sinh chi phí",
            "Kỹ thuật nâng cao chuyên môn bản thân"
        ],

        giaiDoan: [
            {
                title: "GIAI ĐOẠN 1: TIẾP NHẬN YÊU CẦU",
                steps: [
                    {
                        title: "Bước 1: Sale liên hệ kỹ thuật phụ trách",
                        congViec: [
                            "Xác định:",
                            "• Yêu cầu khách hàng"
                        ],
                        ketQua: "Báo vấn đề cần hỗ trợ với kỹ thuật phụ trách chính"
                    },
                    {
                        title: "Bước 2: Kỹ thuật tiếp nhận & xử lý",
                        congViec: [
                            "• Phân tích yêu cầu",
                            "• Tư vấn kỹ thuật",
                            "• Giải đáp thắc mắc"
                        ],
                        ketQua: "Giải pháp kỹ thuật gửi lại Sale hoặc KH"
                    }
                ]
            },

            {
                title: "GIAI ĐOẠN 2: XỬ LÝ NÂNG CAO",
                steps: [
                    {
                        title: "Bước 3: Nếu kỹ thuật phụ trách không xử lý được",
                        congViec: [
                            "Kỹ thuật chủ động:",
                            "• Hỏi lại quản lý",
                            "• Trao đổi nội bộ để tìm phương án",
                            "• Hỏi support của hãng"
                        ],
                        ketQua: "Tìm cách giải quyết vấn đề cho KH"
                    },
                    {
                        title: "Bước 4: Kỹ thuật phụ trách chính phản hồi lại Sale/KH",
                        congViec: [
                            "• Sau khi có phương án xử lý, kỹ thuật phụ trách chính chịu trách nhiệm phản hồi lại sale hoặc KH"
                        ],
                        ketQua: ""
                    }
                ]
            },

            {
                title: "HỖ TRỢ KINH DOANH CHỦ ĐỘNG",
                steps: [
                    {
                        title: "HOẠT ĐỘNG 1: TRAINING NỘI BỘ CHO SALE",
                        congViec: [
                            "Kỹ thuật sẽ:",
                            " Thuyết trình về:",
                            "- Các sản phẩm mới của công ty",
                            "- Giải pháp automation",
                            "• Hướng dẫn:",
                            "- Cách chọn thiết bị",
                            "- Các lỗi thường gặp"
                        ],
                        ketQua: [
                            "Tài liệu training",
                            "Sale hiểu sản phẩm tốt hơn",
                            "",
                            "KPI gắn vào:",
                            "Số buổi training/tháng (≥ 1–2)",
                            "Đánh giá từ Sale ≥ 4/5"
                        ]
                    },
                    {
                        title: "HOẠT ĐỘNG 2: THAM GIA GẶP KHÁCH HÀNG",
                        congViec: [
                            "Khi nào cần:",
                            "• Dự án:",
                            "Phức tạp",
                            "Giá trị lớn",
                            "Khách cần tư vấn kỹ",
                            "",
                            "Trước khi đi:",
                            "• Chuẩn bị:",
                            "Giải pháp",
                            "Demo (nếu có)",
                            "Tài liệu",
                            "",
                            "Khi gặp khách:",
                            "• Thuyết trình:",
                            "Giải pháp kỹ thuật",
                            "Tư vấn sản phẩm",
                            "Trả lời câu hỏi",
                            "",
                            "Sau buổi gặp:",
                            "• Tổng hợp thông tin",
                            "• Điều chỉnh giải pháp"
                        ],
                        ketQua: [
                            "Khách hiểu rõ giải pháp",
                            "Tăng khả năng chốt đơn",
                            "",
                            "KPI gắn vào:",
                            "Số buổi gặp khách/tháng",
                            "Tỷ lệ chốt deal có tham gia kỹ thuật",
                            "Đánh giá từ Sale"
                        ]
                    }
                ]
            }
        ]
    },
    "xuly-baohanh": {
        title: "Quy trình xử lý hàng bảo hành",
        mucTieu: "Xử lý nhanh chóng và hiệu quả các vấn đề bảo hành, đảm bảo sự hài lòng của khách hàng.",
        tongQuanFlow: "Tiếp nhận → Chẩn đoán → Sửa chữa → Kiểm tra → Bàn giao",
        giaiDoan: [
            "Tiếp nhận yêu cầu bảo hành",
            "Chẩn đoán vấn đề",
            "Sửa chữa và thay thế",
            "Kiểm tra chất lượng",
            "Bàn giao và xác nhận"
        ],
        buocCongViec: [
            "1. Ghi nhận thông tin bảo hành",
            "2. Kiểm tra điều kiện bảo hành",
            "3. Chẩn đoán lỗi kỹ thuật",
            "4. Lên kế hoạch sửa chữa",
            "5. Thực hiện sửa chữa",
            "6. Test và xác nhận",
            "7. Bàn giao cho khách hàng"
        ],
        ketQuaDauRa: "Sản phẩm được sửa chữa, báo cáo bảo hành, xác nhận khách hàng."
    },
    "phoihop-muahang": {
        title: "Quy trình phối hợp Mua hàng",
        mucTieu: "Đảm bảo cung ứng vật tư đúng thời điểm, chất lượng và tiết kiệm chi phí.",
        tongQuanFlow: "Yêu cầu → Tư vấn → Đặt hàng → Theo dõi → Nhận hàng",
        giaiDoan: [
            "Xác định nhu cầu",
            "Tư vấn và lựa chọn",
            "Đặt hàng và hợp đồng",
            "Theo dõi giao hàng",
            "Nhận và kiểm tra"
        ],
        buocCongViec: [
            "1. Xác định danh mục vật tư cần thiết",
            "2. Tư vấn kỹ thuật với PMH",
            "3. Lập bảng báo giá và so sánh",
            "4. Đề xuất và phê duyệt",
            "5. Đặt hàng và ký hợp đồng",
            "6. Theo dõi tiến độ giao hàng",
            "7. Nhận hàng và kiểm tra chất lượng"
        ],
        ketQuaDauRa: "Vật tư đạt chất lượng, hóa đơn, báo cáo nhập kho."
    }
};

// Biến global cho quy trình
let quyTrinhMenuSection, quyTrinhDetailSection, projectProcessPage, projectStageWrapper, originalProjectStageWrapperHTML, originalProcessFlowHTML;

document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử
    const kpiButtons = document.querySelectorAll('.kpi-btn');
    const kpiTabs = document.getElementById('kpi-tabs');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Modal elements
    const modal = document.getElementById('password-modal');
    const closeBtn = document.querySelector('.close');
    const submitBtn = document.getElementById('submit-password');
    const cancelBtn = document.getElementById('cancel-password');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const modalTitle = document.getElementById('modal-title');
    const modalMember = document.getElementById('modal-member');
    const logoutBtn = document.getElementById('logout-btn');
    const viewAllKpiBtn = document.getElementById('view-all-kpi-btn');
    const quyTrinhBtn = document.getElementById('quy-trinh-btn');
    quyTrinhMenuSection = document.getElementById('quy-trinh-menu-section');
    quyTrinhDetailSection = document.getElementById('quy-trinh-detail-section');
    projectProcessPage = document.getElementById('project-process-page');
    const backToMainFromMenuBtn = document.getElementById('back-to-main-from-menu-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const backToMenuFromProcessBtn = document.getElementById('back-to-menu-from-process-btn');
    
    // Mật khẩu cho từng thành viên (có thể thay đổi)
    const passwords = {
        1: "kpi1",
        2: "kpi2", 
        3: "kpi3",
        4: "kpi4",
        5: "kpi5"
    };
    
    // Mật khẩu admin (Trưởng phòng và Giám đốc)
    const adminPasswords = {
        "truongphong": "admin1",
        "giamdoc": "admin2"
    };
    
    let currentMemberId = null;
    let isAdminMode = false;

    // Xử lý nút "Xem tất cả KPI"
    viewAllKpiBtn.addEventListener('click', function() {
        isAdminMode = true;
        modalTitle.textContent = 'Nhập mật khẩu quản lý';
        modalMember.textContent = 'Trưởng phòng hoặc Giám đốc';
        passwordInput.value = '';
        errorMessage.style.display = 'none';
        modal.style.display = 'block';
    });

    // Xử lý nút "Quy trình"
    quyTrinhBtn.addEventListener('click', function() {
        // Ẩn các section khác
        document.querySelector('.members').style.display = 'none';
        kpiTabs.style.display = 'none';
        quyTrinhDetailSection.style.display = 'none';
        
        // Hiển thị menu quy trình
        quyTrinhMenuSection.style.display = 'block';
        
        // Cuộn xuống phần menu
        quyTrinhMenuSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Xử lý nút "Quay lại trang chính" từ menu
    backToMainFromMenuBtn.addEventListener('click', function() {
        // Ẩn menu quy trình
        quyTrinhMenuSection.style.display = 'none';
        
        // Hiển thị lại section members
        document.querySelector('.members').style.display = 'block';
        
        // Cuộn lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Xử lý nút "Quay lại menu" từ chi tiết
    backToMenuBtn.addEventListener('click', function() {
        // Ẩn chi tiết quy trình
        quyTrinhDetailSection.style.display = 'none';
        projectProcessPage.style.display = 'none';
        
        // Hiển thị lại menu quy trình
        quyTrinhMenuSection.style.display = 'block';
        
        // Cuộn lên menu
        quyTrinhMenuSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Xử lý nút "Quay lại menu" từ process page
    if (backToMenuFromProcessBtn) {
        backToMenuFromProcessBtn.addEventListener('click', function() {
            // Ẩn process page
            projectProcessPage.style.display = 'none';
            
            // Hiển thị lại menu quy trình
            quyTrinhMenuSection.style.display = 'block';
            
            // Cuộn lên menu
            quyTrinhMenuSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Xử lý các nút menu quy trình
    const menuButtons = document.querySelectorAll('.menu-btn');
    console.log('Menu buttons found:', menuButtons.length);
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quyTrinhKey = this.parentElement.getAttribute('data-quy-trinh');
            console.log('Clicked quy trinh:', quyTrinhKey);
            showQuyTrinhDetail(quyTrinhKey);
        });
    });

    // Xử lý nút "Xem KPI" trên card thành viên
    kpiButtons.forEach(button => {
        button.addEventListener('click', function() {
            isAdminMode = false;
            currentMemberId = this.parentElement.getAttribute('data-member');
            const memberName = this.parentElement.querySelector('h3').textContent;
            
            // Cập nhật modal
            modalTitle.textContent = 'Nhập mật khẩu để xem KPI';
            modalMember.textContent = `Thành viên: ${memberName}`;
            passwordInput.value = '';
            errorMessage.style.display = 'none';
            
            // Hiển thị modal
            modal.style.display = 'block';
        });
    });

    // Đóng modal khi nhấn X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Đóng modal khi nhấn Hủy
    cancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Xử lý submit mật khẩu
    submitBtn.addEventListener('click', function() {
        const enteredPassword = passwordInput.value;
        
        if (isAdminMode) {
            // Kiểm tra mật khẩu admin
            const isValidAdmin = Object.values(adminPasswords).includes(enteredPassword);
            
            if (isValidAdmin) {
                // Mật khẩu admin đúng
                modal.style.display = 'none';
                
                // Hiển thị tất cả KPI với tabs
                showAllKPIs();
            } else {
                // Mật khẩu sai
                errorMessage.style.display = 'block';
                passwordInput.focus();
            }
        } else {
            // Kiểm tra mật khẩu thành viên
            const correctPassword = passwords[currentMemberId];
            
            if (enteredPassword === correctPassword) {
                // Mật khẩu đúng
                modal.style.display = 'none';
                
                // Hiển thị phần KPI tabs
                kpiTabs.style.display = 'block';
                
                // Cuộn xuống phần KPI
                kpiTabs.scrollIntoView({ behavior: 'smooth' });
                
                // Chỉ hiển thị KPI của thành viên đã đăng nhập
                showMemberKPI(currentMemberId);
            } else {
                // Mật khẩu sai
                errorMessage.style.display = 'block';
                passwordInput.focus();
            }
        }
    });

    // Cho phép nhấn Enter để submit
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });

    // Xử lý nút đăng xuất
    logoutBtn.addEventListener('click', function() {
        // Reset về trạng thái ban đầu
        kpiTabs.style.display = 'none';
        document.querySelector('.kpi-tabs h2').textContent = 'KPI Chi tiết';
        
        // Cuộn lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Xử lý nút tab
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Hàm hiển thị KPI của thành viên đã đăng nhập
    function showMemberKPI(memberId) {
        // Ẩn tất cả tab buttons
        tabButtons.forEach(btn => btn.style.display = 'none');
        
        // Ẩn tất cả tab panes
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Hiển thị tab pane của thành viên đã đăng nhập
        document.getElementById(`tab-${memberId}`).classList.add('active');
        
        // Thay đổi tiêu đề để hiển thị tên thành viên
        const memberName = document.querySelector(`.member-card[data-member="${memberId}"] h3`).textContent;
        document.querySelector('.kpi-tabs h2').textContent = `KPI của ${memberName}`;
    }

    // Hàm hiển thị tất cả KPI (cho admin)
    function showAllKPIs() {
        // Reset hoàn toàn trạng thái KPI tabs
        kpiTabs.style.display = 'none';
        
        // Ẩn tất cả tab panes
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });
        
        // Reset tất cả tab buttons
        tabButtons.forEach(btn => {
            btn.style.display = 'inline-block';
            btn.classList.remove('active');
        });
        
        // Kích hoạt tab đầu tiên
        const firstTabBtn = document.querySelector('.tab-btn[data-tab="1"]');
        const firstTabPane = document.getElementById('tab-1');
        
        if (firstTabBtn && firstTabPane) {
            firstTabBtn.classList.add('active');
            firstTabPane.classList.add('active');
        }
        
        // Hiển thị phần KPI
        kpiTabs.style.display = 'block';
        const titleElement = document.querySelector('.kpi-tabs h2');
        if (titleElement) {
            titleElement.textContent = 'KPI Chi tiết - Quyền quản lý';
        }
        
        // Cuộn xuống phần KPI
        kpiTabs.scrollIntoView({ behavior: 'smooth' });
    }

    // Hàm chuyển đổi tab
    function switchTab(tabId) {
        // Xóa active class từ tất cả tab buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Xóa active class từ tất cả tab panes
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });
        
        // Thêm active class cho tab button được chọn
        const activeTabBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (activeTabBtn) {
            activeTabBtn.classList.add('active');
        }
        
        // Thêm active class cho tab pane tương ứng
        const activeTabPane = document.getElementById(`tab-${tabId}`);
        if (activeTabPane) {
            activeTabPane.classList.add('active');
        }
    }

    // Thêm hiệu ứng hover cho các card
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Thêm animation cho KPI tabs khi hiển thị
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    observer.observe(kpiTabs);
    
    // Thiết lập style ban đầu cho animation
    kpiTabs.style.opacity = '0';
    kpiTabs.style.transform = 'translateY(20px)';
    kpiTabs.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Task Management System
class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentUser = null;
        this.isAdmin = false;
        this.initializeElements();
        this.attachEventListeners();
        this.renderTasks();
    }

    initializeElements() {
        // Task management elements
        this.taskManagement = document.getElementById('task-management');
        this.taskList = document.getElementById('task-list');
        this.taskLoginBtn = document.getElementById('login-btn');
        this.taskLogoutBtn = document.getElementById('logout-btn');
        this.addTaskBtn = document.getElementById('add-task-btn');
        this.taskModal = document.getElementById('task-modal');
        this.taskForm = document.getElementById('task-form');
        this.taskLoginModal = document.getElementById('login-modal');
        this.taskLoginForm = document.getElementById('login-form');
        this.closeModalBtns = document.querySelectorAll('.close');
        this.statusFilter = document.getElementById('filter-status');
        this.employeeFilter = document.getElementById('filter-employee');
        this.searchInput = document.getElementById('search-task');
        this.taskControls = document.getElementById('task-controls');
        this.manageTaskBtn = document.getElementById('manage-task-btn');
        this.evaluateKpiBtn = document.getElementById('evaluate-kpi-btn');
    }

    attachEventListeners() {
        // Login/Logout
        this.taskLoginBtn.addEventListener('click', () => this.showLoginModal());
        this.taskLogoutBtn.addEventListener('click', () => this.logout());
        this.manageTaskBtn.addEventListener('click', () => this.showTaskManagement());
        this.evaluateKpiBtn.addEventListener('click', () => this.showKpiEvaluation());

        // Task operations
        this.addTaskBtn.addEventListener('click', () => this.showTaskModal());
        this.taskForm.addEventListener('submit', (e) => this.handleTaskSubmit(e));
        this.taskLoginForm.addEventListener('submit', (e) => this.handleLogin(e));

        // Filters
        this.statusFilter.addEventListener('change', () => this.renderTasks());
        this.employeeFilter.addEventListener('change', () => this.renderTasks());
        this.searchInput.addEventListener('input', () => this.renderTasks());

        // Modal close
        this.closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });
    }

    showLoginModal() {
        this.taskLoginModal.style.display = 'block';
        document.getElementById('task-username').focus();
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication (in production, this would be server-side)
        const users = {
            'admin': { password: 'admin123', role: 'admin', name: 'Quản trị viên' },
            'truongphong': { password: 'tp123', role: 'admin', name: 'Lê Văn Thái' },
            'giamdoc': { password: 'gd123', role: 'admin', name: 'Giám đốc' },
            'levanthai': { password: 'nv123', role: 'employee', name: 'Lê Văn Thái' },
            'lequocviet': { password: 'nv123', role: 'employee', name: 'Lê Quốc Việt' },
            'nguyentienduong': { password: 'nv123', role: 'employee', name: 'Nguyễn Tiến Dương' },
            'buidacngoc': { password: 'nv123', role: 'employee', name: 'Bùi Đắc Ngọc' },
            'rnd': { password: 'nv123', role: 'employee', name: 'R&D mạch điện tử' }
        };

        const user = users[username];
        if (user && user.password === password) {
            this.currentUser = { username, ...user };
            this.isAdmin = user.role === 'admin';
            this.closeAllModals();
            this.updateUI();
            this.renderTasks();
            this.showSuccessMessage('Đăng nhập thành công!');
        } else {
            document.getElementById('login-error').style.display = 'block';
        }
    }

    logout() {
        this.currentUser = null;
        this.isAdmin = false;
        this.updateUI();
        this.renderTasks();
        this.showSuccessMessage('Đã đăng xuất!');
    }

    showTaskManagement() {
        if (this.currentUser && this.isAdmin) {
            this.taskManagement.style.display = 'block';
            this.taskManagement.scrollIntoView({ behavior: 'smooth' });
        } else {
            this.showErrorMessage('Bạn cần đăng nhập với quyền quản lý để xem phần này!');
        }
    }

    showKpiEvaluation() {
        if (this.currentUser && this.isAdmin) {
            kpiManager.showEvaluation();
        } else {
            this.showErrorMessage('Bạn cần đăng nhập với quyền quản lý để đánh giá KPI!');
        }
    }

    updateUI() {
        if (this.currentUser) {
            this.taskLoginBtn.style.display = 'none';
            this.taskLogoutBtn.style.display = 'inline-block';
            this.manageTaskBtn.style.display = this.isAdmin ? 'inline-block' : 'none';
            this.evaluateKpiBtn.style.display = this.isAdmin ? 'inline-block' : 'none';
            if (this.isAdmin) {
                this.taskControls.style.display = 'flex';
            }
        } else {
            this.taskLoginBtn.style.display = 'inline-block';
            this.taskLogoutBtn.style.display = 'none';
            this.manageTaskBtn.style.display = 'none';
            this.evaluateKpiBtn.style.display = 'none';
            this.taskControls.style.display = 'none';
            this.taskManagement.style.display = 'none';
        }
    }

    showTaskModal(taskId = null) {
        const modalTitle = document.getElementById('task-modal-title');
        const submitBtn = document.getElementById('task-submit-btn');

        if (taskId) {
            const task = this.tasks.find(t => t.id === taskId);
            if (task) {
                document.getElementById('task-id').value = task.id;
                document.getElementById('task-title').value = task.title;
                document.getElementById('task-description').value = task.description;
                document.getElementById('task-assigned-to').value = task.assignedTo;
                document.getElementById('task-due-date').value = task.dueDate;
                document.getElementById('task-priority').value = task.priority;
                document.getElementById('task-status').value = task.status;
                modalTitle.textContent = 'Chỉnh sửa nhiệm vụ';
                submitBtn.textContent = 'Cập nhật';
            }
        } else {
            this.taskForm.reset();
            document.getElementById('task-id').value = '';
            modalTitle.textContent = 'Thêm nhiệm vụ mới';
            submitBtn.textContent = 'Thêm nhiệm vụ';
        }

        this.taskModal.style.display = 'block';
    }

    handleTaskSubmit(e) {
        e.preventDefault();

        const taskData = {
            id: document.getElementById('task-id').value || Date.now().toString(),
            title: document.getElementById('task-title').value,
            description: document.getElementById('task-description').value,
            priority: document.getElementById('task-priority').value,
            assignedTo: document.getElementById('task-assigned-to').value,
            dueDate: document.getElementById('task-due-date').value,
            status: document.getElementById('task-status').value,
            createdBy: this.currentUser.name,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const existingIndex = this.tasks.findIndex(t => t.id === taskData.id);

        if (existingIndex >= 0) {
            // Update existing task
            this.tasks[existingIndex] = { ...this.tasks[existingIndex], ...taskData };
            this.showSuccessMessage('Cập nhật nhiệm vụ thành công!');
        } else {
            // Add new task
            this.tasks.push(taskData);
            this.showSuccessMessage('Thêm nhiệm vụ thành công!');
        }

        this.saveTasks();
        this.renderTasks();
        this.closeAllModals();
    }

    deleteTask(taskId) {
        if (confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này?')) {
            this.tasks = this.tasks.filter(t => t.id !== taskId);
            this.saveTasks();
            this.renderTasks();
            this.showSuccessMessage('Xóa nhiệm vụ thành công!');
        }
    }

    updateTaskStatus(taskId, newStatus) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.status = newStatus;
            task.updatedAt = new Date().toISOString();
            this.saveTasks();
            this.renderTasks();
            this.showSuccessMessage('Cập nhật trạng thái thành công!');
        }
    }

    renderTasks() {
        if (!this.currentUser) return;

        let filteredTasks = [...this.tasks];

        // Apply filters
        const statusFilter = this.statusFilter.value;
        const employeeFilter = this.employeeFilter.value;
        const searchTerm = this.searchInput.value.toLowerCase();

        if (statusFilter) {
            filteredTasks = filteredTasks.filter(task => task.status === statusFilter);
        }

        if (employeeFilter) {
            filteredTasks = filteredTasks.filter(task => task.assignedTo === employeeFilter);
        }

        if (searchTerm) {
            filteredTasks = filteredTasks.filter(task =>
                task.title.toLowerCase().includes(searchTerm) ||
                task.description.toLowerCase().includes(searchTerm)
            );
        }

        // For employees, only show tasks assigned to them
        if (!this.isAdmin) {
            filteredTasks = filteredTasks.filter(task => task.assignedTo === this.currentUser.name);
        }

        // Sort by due date and priority
        filteredTasks.sort((a, b) => {
            const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
            const aPriority = priorityOrder[a.priority] || 0;
            const bPriority = priorityOrder[b.priority] || 0;

            if (a.dueDate && b.dueDate) {
                return new Date(a.dueDate) - new Date(b.dueDate);
            }
            return bPriority - aPriority;
        });

        this.taskList.innerHTML = '';

        if (filteredTasks.length === 0) {
            this.taskList.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Không có nhiệm vụ nào phù hợp với bộ lọc.</p>';
            return;
        }

        filteredTasks.forEach(task => {
            const taskCard = this.createTaskCard(task);
            this.taskList.appendChild(taskCard);
        });
    }

    createTaskCard(task) {
        const card = document.createElement('div');
        card.className = `task-card ${task.priority}-priority ${task.status === 'completed' ? 'completed' : ''}`;

        const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'completed';
        const statusClass = isOverdue ? 'overdue' : task.status.replace('-', '');

        card.innerHTML = `
            <div class="task-header">
                <h3 class="task-title">${task.title}</h3>
                <span class="task-status status-${statusClass}">${this.getStatusText(task.status)}</span>
            </div>
            <div class="task-meta">
                <p><strong>Người thực hiện:</strong> ${this.getUserName(task.assignedTo)}</p>
                <p><strong>Ưu tiên:</strong> ${this.getPriorityText(task.priority)}</p>
                ${task.dueDate ? `<p><strong>Hạn:</strong> ${new Date(task.dueDate).toLocaleDateString('vi-VN')}</p>` : ''}
                ${isOverdue ? '<p style="color: #e74c3c; font-weight: bold;">⚠️ Quá hạn!</p>' : ''}
            </div>
            <div class="task-description">${task.description}</div>
            <div class="task-actions">
                ${this.isAdmin ? `
                    <button onclick="taskManager.showTaskModal('${task.id}')" class="btn btn-secondary">Chỉnh sửa</button>
                    <button onclick="taskManager.deleteTask('${task.id}')" class="btn btn-danger">Xóa</button>
                ` : ''}
                ${!this.isAdmin && task.assignedTo === this.currentUser.name ? `
                    <select onchange="taskManager.updateTaskStatus('${task.id}', this.value)" class="status-select">
                        <option value="not-started" ${task.status === 'not-started' ? 'selected' : ''}>Chưa bắt đầu</option>
                        <option value="in-progress" ${task.status === 'in-progress' ? 'selected' : ''}>Đang thực hiện</option>
                        <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Hoàn thành</option>
                    </select>
                ` : ''}
            </div>
        `;

        return card;
    }

    getStatusText(status) {
        const statusMap = {
            'not-started': 'Chưa bắt đầu',
            'in-progress': 'Đang thực hiện',
            'completed': 'Hoàn thành'
        };
        return statusMap[status] || status;
    }

    getPriorityText(priority) {
        const priorityMap = {
            'high': 'Cao',
            'medium': 'Trung bình',
            'low': 'Thấp'
        };
        return priorityMap[priority] || priority;
    }

    getUserName(name) {
        // Since we're storing the display name directly, just return it
        return name || 'Không xác định';
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    closeAllModals() {
        this.taskModal.style.display = 'none';
        this.taskLoginModal.style.display = 'none';
    }

    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        if (type === 'success') {
            messageEl.style.backgroundColor = '#27ae60';
        } else {
            messageEl.style.backgroundColor = '#e74c3c';
        }

        document.body.appendChild(messageEl);

        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 3000);
    }
}

// Add CSS for messages
const messageStyles = `
@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}

.message {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.status-select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = messageStyles;
document.head.appendChild(styleSheet);

// Initialize Task Manager
const taskManager = new TaskManager();

// KPI Manager Class
class KPIManager {
    constructor() {
        this.evaluations = JSON.parse(localStorage.getItem('kpiEvaluations')) || [];
        this.currentEvaluation = null;
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        // KPI Evaluation elements
        this.kpiEvaluation = document.getElementById('kpi-evaluation');
        this.evalEmployee = document.getElementById('eval-employee');
        this.evalMonth = document.getElementById('eval-month');
        this.loadEvaluationBtn = document.getElementById('load-evaluation-btn');
        this.saveDraftBtn = document.getElementById('save-draft-btn');
        this.finalizeEvaluationBtn = document.getElementById('finalize-evaluation-btn');
        this.evaluationStatus = document.getElementById('evaluation-status');

        // KPI input elements
        this.kpi1TasksSummary = document.getElementById('kpi1-tasks-summary');
        this.kpi1Rate = document.getElementById('kpi1-rate');
        this.kpi1Score = document.getElementById('kpi1-score');

        // KPI 2 inputs
        this.kpi2MajorErrors = document.getElementById('kpi2-major-errors');
        this.kpi2MinorErrors = document.getElementById('kpi2-minor-errors');
        this.kpi2ReworkErrors = document.getElementById('kpi2-rework-errors');
        this.kpi2CustomerFeedback = document.getElementById('kpi2-customer-feedback');
        this.kpi2Score = document.getElementById('kpi2-score');

        // KPI 3 inputs
        this.kpi3SupportCases = document.getElementById('kpi3-support-cases');
        this.kpi3ResponseTime = document.getElementById('kpi3-response-time');
        this.kpi3SuccessRate = document.getElementById('kpi3-success-rate');
        this.kpi3Rating = document.getElementById('kpi3-rating');
        this.kpi3Score = document.getElementById('kpi3-score');

        // KPI 4 checkboxes
        this.kpi4ReportTimely = document.getElementById('kpi4-report-timely');
        this.kpi4Compliance = document.getElementById('kpi4-5s-compliance');
        this.kpi4Rules = document.getElementById('kpi4-company-rules');
        this.kpi4Safety = document.getElementById('kpi4-safety-rules');
        this.kpi4Attendance = document.getElementById('kpi4-attendance');
        this.kpi4Score = document.getElementById('kpi4-score');

        // KPI 5 inputs
        this.kpi5ScoreInput = document.getElementById('kpi5-score-input');
        this.kpi5Notes = document.getElementById('kpi5-notes');
        this.kpi5Score = document.getElementById('kpi5-score');

        // Summary elements
        this.summaryKpi1 = document.getElementById('summary-kpi1');
        this.summaryKpi2 = document.getElementById('summary-kpi2');
        this.summaryKpi3 = document.getElementById('summary-kpi3');
        this.summaryKpi4 = document.getElementById('summary-kpi4');
        this.summaryKpi5 = document.getElementById('summary-kpi5');
        this.summaryTotal = document.getElementById('summary-total');
        this.summarySalary = document.getElementById('summary-salary');
    }

    attachEventListeners() {
        this.loadEvaluationBtn.addEventListener('click', () => this.loadEvaluation());
        this.saveDraftBtn.addEventListener('click', () => this.saveEvaluation(false));
        this.finalizeEvaluationBtn.addEventListener('click', () => this.saveEvaluation(true));

        // Auto-calculate when inputs change
        this.attachAutoCalculateListeners();
    }

    attachAutoCalculateListeners() {
        // KPI 2
        [this.kpi2MajorErrors, this.kpi2MinorErrors, this.kpi2ReworkErrors, this.kpi2CustomerFeedback].forEach(el => {
            el.addEventListener('input', () => this.calculateKPI2());
        });

        // KPI 3
        [this.kpi3SupportCases, this.kpi3ResponseTime, this.kpi3SuccessRate, this.kpi3Rating].forEach(el => {
            el.addEventListener('input', () => this.calculateKPI3());
        });

        // KPI 4
        [this.kpi4ReportTimely, this.kpi4Compliance, this.kpi4Rules, this.kpi4Safety, this.kpi4Attendance].forEach(el => {
            el.addEventListener('change', () => this.calculateKPI4());
        });

        // KPI 5
        this.kpi5ScoreInput.addEventListener('input', () => this.calculateKPI5());

        // Overall calculation
        [this.kpi1Score, this.kpi2Score, this.kpi3Score, this.kpi4Score, this.kpi5Score].forEach(el => {
            el.addEventListener('DOMSubtreeModified', () => this.calculateTotal());
        });
    }

    showEvaluation() {
        this.kpiEvaluation.style.display = 'block';
        this.kpiEvaluation.scrollIntoView({ behavior: 'smooth' });
        this.loadEvaluation();
    }

    loadEvaluation() {
        const employee = this.evalEmployee.value;
        const month = this.evalMonth.value;

        // Find existing evaluation
        this.currentEvaluation = this.evaluations.find(e => 
            e.employee === employee && e.month === month
        );

        if (this.currentEvaluation) {
            this.populateForm(this.currentEvaluation);
        } else {
            this.resetForm();
            this.currentEvaluation = {
                id: Date.now().toString(),
                employee,
                month,
                status: 'draft',
                kpi1: { tasks: [], rate: 0, score: 0 },
                kpi2: { majorErrors: 0, minorErrors: 0, reworkErrors: 0, customerFeedback: 3, score: 0 },
                kpi3: { supportCases: 0, responseTime: 0, successRate: 0, rating: 3, score: 0 },
                kpi4: { reportTimely: true, compliance: true, rules: true, safety: true, attendance: true, score: 0 },
                kpi5: { score: 0, notes: '', displayScore: 0 },
                totalScore: 0,
                salary: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
        }

        this.calculateKPI1();
        this.updateStatus();
    }

    populateForm(evaluation) {
        // KPI 2
        this.kpi2MajorErrors.value = evaluation.kpi2.majorErrors;
        this.kpi2MinorErrors.value = evaluation.kpi2.minorErrors;
        this.kpi2ReworkErrors.value = evaluation.kpi2.reworkErrors;
        this.kpi2CustomerFeedback.value = evaluation.kpi2.customerFeedback;

        // KPI 3
        this.kpi3SupportCases.value = evaluation.kpi3.supportCases;
        this.kpi3ResponseTime.value = evaluation.kpi3.responseTime;
        this.kpi3SuccessRate.value = evaluation.kpi3.successRate;
        this.kpi3Rating.value = evaluation.kpi3.rating;

        // KPI 4
        this.kpi4ReportTimely.checked = evaluation.kpi4.reportTimely;
        this.kpi4Compliance.checked = evaluation.kpi4.compliance;
        this.kpi4Rules.checked = evaluation.kpi4.rules;
        this.kpi4Safety.checked = evaluation.kpi4.safety;
        this.kpi4Attendance.checked = evaluation.kpi4.attendance;

        // KPI 5
        this.kpi5ScoreInput.value = evaluation.kpi5.score;
        this.kpi5Notes.value = evaluation.kpi5.notes;
    }

    resetForm() {
        // Reset KPI 2
        this.kpi2MajorErrors.value = 0;
        this.kpi2MinorErrors.value = 0;
        this.kpi2ReworkErrors.value = 0;
        this.kpi2CustomerFeedback.value = 3;

        // Reset KPI 3
        this.kpi3SupportCases.value = 0;
        this.kpi3ResponseTime.value = 0;
        this.kpi3SuccessRate.value = 0;
        this.kpi3Rating.value = 3;

        // Reset KPI 4
        this.kpi4ReportTimely.checked = true;
        this.kpi4Compliance.checked = true;
        this.kpi4Rules.checked = true;
        this.kpi4Safety.checked = true;
        this.kpi4Attendance.checked = true;

        // Reset KPI 5
        this.kpi5ScoreInput.value = 0;
        this.kpi5Notes.value = '';
    }

    calculateKPI1() {
        const employee = this.evalEmployee.value;
        const month = this.evalMonth.value;
        
        // Get tasks for this employee and month
        const employeeTasks = taskManager.tasks.filter(task => 
            task.assignedTo === employee && 
            task.dueDate && 
            task.dueDate.startsWith(month)
        );

        let completedOnTime = 0;
        let totalTasks = employeeTasks.length;

        employeeTasks.forEach(task => {
            if (task.status === 'completed') {
                const dueDate = new Date(task.dueDate);
                const completedDate = new Date(task.updatedAt);
                if (completedDate <= dueDate) {
                    completedOnTime++;
                }
            }
        });

        const rate = totalTasks > 0 ? (completedOnTime / totalTasks) * 100 : 0;
        const score = Math.round(rate); // Direct percentage as score

        // Update display
        this.kpi1TasksSummary.innerHTML = `
            <p><strong>Tổng số task:</strong> ${totalTasks}</p>
            <p><strong>Hoàn thành đúng hạn:</strong> ${completedOnTime}</p>
        `;

        this.kpi1Rate.textContent = `${rate.toFixed(1)}%`;
        this.kpi1Score.textContent = `${score}/100`;

        if (this.currentEvaluation) {
            this.currentEvaluation.kpi1 = {
                tasks: employeeTasks,
                completedOnTime,
                totalTasks,
                rate,
                score
            };
        }

        this.updateSummary();
    }

    calculateKPI2() {
        const majorErrors = parseInt(this.kpi2MajorErrors.value) || 0;
        const minorErrors = parseInt(this.kpi2MinorErrors.value) || 0;
        const reworkErrors = parseInt(this.kpi2ReworkErrors.value) || 0;
        const customerFeedback = parseInt(this.kpi2CustomerFeedback.value) || 3;

        // Simple scoring logic: deduct points for errors, bonus for good feedback
        let score = 100;
        score -= majorErrors * 10; // -10 per major error
        score -= minorErrors * 5;  // -5 per minor error
        score -= reworkErrors * 8; // -8 per rework
        score += (customerFeedback - 3) * 5; // +/-5 per feedback point from 3

        score = Math.max(0, Math.min(100, score));

        this.kpi2Score.textContent = `${Math.round(score)}/100`;

        if (this.currentEvaluation) {
            this.currentEvaluation.kpi2 = {
                majorErrors, minorErrors, reworkErrors, customerFeedback, score
            };
        }

        this.updateSummary();
    }

    calculateKPI3() {
        const supportCases = parseInt(this.kpi3SupportCases.value) || 0;
        const responseTime = parseFloat(this.kpi3ResponseTime.value) || 0;
        const successRate = parseFloat(this.kpi3SuccessRate.value) || 0;
        const rating = parseInt(this.kpi3Rating.value) || 3;

        // Scoring logic for support quality
        let score = 100;
        
        // Response time: faster is better (assume target < 2 hours)
        if (responseTime > 2) score -= (responseTime - 2) * 10;
        
        // Success rate bonus
        score += (successRate - 80) * 0.5; // Bonus for >80% success
        
        // Rating bonus
        score += (rating - 3) * 5;

        score = Math.max(0, Math.min(100, score));

        this.kpi3Score.textContent = `${Math.round(score)}/100`;

        if (this.currentEvaluation) {
            this.currentEvaluation.kpi3 = {
                supportCases, responseTime, successRate, rating, score
            };
        }

        this.updateSummary();
    }

    calculateKPI4() {
        const checkboxes = [
            this.kpi4ReportTimely.checked,
            this.kpi4Compliance.checked,
            this.kpi4Rules.checked,
            this.kpi4Safety.checked,
            this.kpi4Attendance.checked
        ];

        const checkedCount = checkboxes.filter(Boolean).length;
        const score = (checkedCount / checkboxes.length) * 100;

        this.kpi4Score.textContent = `${Math.round(score)}/100`;

        if (this.currentEvaluation) {
            this.currentEvaluation.kpi4 = {
                reportTimely: this.kpi4ReportTimely.checked,
                compliance: this.kpi4Compliance.checked,
                rules: this.kpi4Rules.checked,
                safety: this.kpi4Safety.checked,
                attendance: this.kpi4Attendance.checked,
                score
            };
        }

        this.updateSummary();
    }

    calculateKPI5() {
        const score = parseInt(this.kpi5ScoreInput.value) || 0;
        this.kpi5Score.textContent = `${score}/100`;

        if (this.currentEvaluation) {
            this.currentEvaluation.kpi5 = {
                score,
                notes: this.kpi5Notes.value,
                displayScore: score
            };
        }

        this.updateSummary();
    }

    calculateTotal() {
        if (!this.currentEvaluation) return;

        const kpi1Score = this.currentEvaluation.kpi1.score || 0;
        const kpi2Score = this.currentEvaluation.kpi2.score || 0;
        const kpi3Score = this.currentEvaluation.kpi3.score || 0;
        const kpi4Score = this.currentEvaluation.kpi4.score || 0;
        const kpi5Score = this.currentEvaluation.kpi5.score || 0;

        // Calculate weighted total
        const totalScore = (
            kpi1Score * 0.40 +  // 40%
            kpi2Score * 0.25 +  // 25%
            kpi3Score * 0.15 +  // 15%
            kpi4Score * 0.10 +  // 10%
            kpi5Score * 0.10    // 10%
        );

        // Calculate salary (example: linear mapping 0-100 -> 0-5M VND)
        const salary = Math.round(totalScore * 50000); // 100 points = 5M VND

        this.currentEvaluation.totalScore = Math.round(totalScore);
        this.currentEvaluation.salary = salary;

        this.updateSummary();
    }

    updateSummary() {
        if (!this.currentEvaluation) return;

        this.summaryKpi1.textContent = this.currentEvaluation.kpi1.score || 0;
        this.summaryKpi2.textContent = this.currentEvaluation.kpi2.score || 0;
        this.summaryKpi3.textContent = this.currentEvaluation.kpi3.score || 0;
        this.summaryKpi4.textContent = this.currentEvaluation.kpi4.score || 0;
        this.summaryKpi5.textContent = this.currentEvaluation.kpi5.score || 0;
        this.summaryTotal.textContent = `${this.currentEvaluation.totalScore || 0}/100`;
        this.summarySalary.textContent = `${(this.currentEvaluation.salary || 0).toLocaleString()} VND`;
    }

    saveEvaluation(finalized = false) {
        if (!this.currentEvaluation) return;

        this.currentEvaluation.status = finalized ? 'finalized' : 'draft';
        this.currentEvaluation.updatedAt = new Date().toISOString();

        // Update or add to evaluations array
        const existingIndex = this.evaluations.findIndex(e => 
            e.employee === this.currentEvaluation.employee && 
            e.month === this.currentEvaluation.month
        );

        if (existingIndex >= 0) {
            this.evaluations[existingIndex] = this.currentEvaluation;
        } else {
            this.evaluations.push(this.currentEvaluation);
        }

        this.saveEvaluations();
        this.updateStatus();

        const message = finalized ? 
            'Đã chốt kỳ đánh giá thành công!' : 
            'Đã lưu nháp đánh giá!';
        
        taskManager.showSuccessMessage(message);
    }

    updateStatus() {
        if (!this.currentEvaluation) return;

        const statusEl = this.evaluationStatus;
        if (this.currentEvaluation.status === 'finalized') {
            statusEl.textContent = 'Trạng thái: Đã chốt';
            statusEl.className = 'status-finalized';
            this.finalizeEvaluationBtn.disabled = true;
            this.saveDraftBtn.disabled = true;
        } else {
            statusEl.textContent = 'Trạng thái: Nháp';
            statusEl.className = 'status-draft';
            this.finalizeEvaluationBtn.disabled = false;
            this.saveDraftBtn.disabled = false;
        }
    }

    saveEvaluations() {
        localStorage.setItem('kpiEvaluations', JSON.stringify(this.evaluations));
    }
}

// Hàm hiển thị chi tiết quy trình
function showQuyTrinhDetail(quyTrinhKey) {
    console.log('showQuyTrinhDetail called with key:', quyTrinhKey);
    console.log('quyTrinhData:', quyTrinhData);
    const quyTrinh = quyTrinhData[quyTrinhKey];
    console.log('quyTrinh found:', quyTrinh);
    if (!quyTrinh) {
        console.log('quyTrinh not found!');
        return;
    }

    // Ẩn menu
    console.log('Hiding menu...');
    quyTrinhMenuSection.style.display = 'none';

    // Nếu là quy trình triển khai dự án, hiển thị process page tĩnh
    if (quyTrinhKey === 'trienkhai-duan') {
        console.log('Showing project process page...');
        quyTrinhDetailSection.style.display = 'none';
        projectProcessPage.style.display = 'block';
        projectProcessPage.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    console.log('Showing detail section...');
    // Cập nhật tiêu đề
    document.getElementById('detail-title').textContent = quyTrinh.title;

    // Tạo nội dung chi tiết
    const content = document.getElementById('quy-trinh-content');
    const isStructuredStages = Array.isArray(quyTrinh.giaiDoan) && typeof quyTrinh.giaiDoan[0] === 'object';

    if (isStructuredStages) {
        const mucTieuHtml = Array.isArray(quyTrinh.mucTieu)
            ? `<ul>${quyTrinh.mucTieu.map(item => `<li>${item}</li>`).join('')}</ul>`
            : `<p>${quyTrinh.mucTieu}</p>`;

        content.innerHTML = `
            <div class="quy-trinh-detail-section">
                <h3>Mục tiêu</h3>
                ${mucTieuHtml}
            </div>
            ${quyTrinh.giaiDoan.map(stage => `
                <div class="quy-trinh-detail-section">
                    <h3>${stage.title}</h3>
                    ${stage.steps.map(step => `
                        <div class="quy-trinh-step-card">
                            <h4>${step.title}</h4>
                            <ul>
                                ${step.congViec.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                            ${step.ketQua ? `
                                <div class="step-result">
                                    <strong>Kết quả:</strong><br>
                                    ${Array.isArray(step.ketQua) ? step.ketQua.join('<br>') : step.ketQua}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        `;
    } else {
        content.innerHTML = `
            <div class="quy-trinh-detail-section">
                <h3>Mục tiêu</h3>
                <p>${quyTrinh.mucTieu}</p>
            </div>
            <div class="quy-trinh-detail-section">
                <h3>Tổng quan Flow</h3>
                <p>${quyTrinh.tongQuanFlow}</p>
            </div>
            <div class="quy-trinh-detail-section">
                <h3>Các giai đoạn</h3>
                <ul>
                    ${quyTrinh.giaiDoan.map(giaiDoan => `<li>${giaiDoan}</li>`).join('')}
                </ul>
            </div>
            <div class="quy-trinh-detail-section">
                <h3>Các bước công việc</h3>
                <ol>
                    ${quyTrinh.buocCongViec.map(buoc => `<li>${buoc}</li>`).join('')}
                </ol>
            </div>
            <div class="quy-trinh-detail-section">
                <h3>Kết quả đầu ra</h3>
                <p>${quyTrinh.ketQuaDauRa}</p>
            </div>
        `;
    }

    // Ẩn process page và hiển thị chi tiết
    projectProcessPage.style.display = 'none';
    quyTrinhDetailSection.style.display = 'block';

    // Cuộn xuống chi tiết
    quyTrinhDetailSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize KPI Manager
const kpiManager = new KPIManager();