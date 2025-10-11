export const courses = [
  {
    id: 1,
    name: "Vue.js Cơ Bản Đến Nâng Cao",
    description:
      "Khóa học toàn diện giúp bạn làm chủ Vue.js 3, hiểu rõ component-based architecture, reactive data, lifecycle hooks, và state management với Pinia hoặc Vuex.",
    level: "Trung cấp",
    price: 599000,
    tag_ids: [1, 10], // Frontend, SPA
    created_at: "2025-07-15T09:30:00Z",
  },
  {
    id: 2,
    name: "ReactJS Toàn Tập Qua Dự Án Thực Tế",
    description:
      "Khóa học ReactJS từ cơ bản đến nâng cao. Bao gồm các chủ đề như component function, hooks, context API, routing, và tối ưu performance.",
    level: "Nâng cao",
    price: 699000,
    tag_ids: [1, 10], // Frontend, SPA
    created_at: "2025-06-10T08:00:00Z",
  },
  {
    id: 3,
    name: "Laravel Pro 2025 - Xây Dựng Hệ Thống API Chuẩn Doanh Nghiệp",
    description:
      "Khóa học Laravel tập trung vào backend: xây dựng RESTful API, phân quyền (role & permission), queue, event, job, và tối ưu hiệu năng.",
    level: "Chuyên sâu",
    price: 799000,
    tag_ids: [2, 9], // Backend, Performance
    created_at: "2025-05-20T12:45:00Z",
  },
  {
    id: 4,
    name: "Tailwind CSS Mastery - Thiết Kế Giao Diện Hiện Đại",
    description:
      "Khóa học hướng dẫn sử dụng Tailwind CSS chuyên sâu để thiết kế UI hiện đại, responsive và tối ưu code cho performance.",
    level: "Cơ bản",
    price: 399000,
    tag_ids: [1, 4, 8], // Frontend, UI/UX, CSS
    created_at: "2025-04-28T14:20:00Z",
  },
  {
    id: 5,
    name: "Node.js & Express API - Backend Từ A Đến Z",
    description:
      "Khóa học giúp bạn hiểu cách xây dựng hệ thống API mạnh mẽ với Express.js, kết nối MongoDB, xử lý JWT Auth và triển khai thực tế trên server.",
    level: "Trung cấp",
    price: 649000,
    tag_ids: [2], // Backend
    created_at: "2025-04-05T10:10:00Z",
  },
  {
    id: 6,
    name: "Docker & DevOps Cho Lập Trình Viên",
    description:
      "Học cách đóng gói ứng dụng với Docker, thiết lập CI/CD pipeline, quản lý môi trường và deploy tự động.",
    level: "Nâng cao",
    price: 899000,
    tag_ids: [3], // DevOps
    created_at: "2025-03-12T11:15:00Z",
  },
  {
    id: 7,
    name: "SQL & Database Optimization",
    description:
      "Khóa học SQL giúp bạn viết query tối ưu, hiểu indexing, joins, transaction, và tuning hiệu năng database MySQL & PostgreSQL.",
    level: "Trung cấp",
    price: 499000,
    tag_ids: [6, 9], // Database, Performance
    created_at: "2025-02-10T09:00:00Z",
  },
  {
    id: 8,
    name: "TypeScript Cho Dự Án Thực Tế",
    description:
      "Hiểu rõ TypeScript, typing nâng cao, generics, decorators và tích hợp với Vue/React để giảm lỗi runtime và tăng maintainability.",
    level: "Nâng cao",
    price: 579000,
    tag_ids: [1, 2], // Frontend, Backend
    created_at: "2025-01-22T10:00:00Z",
  },
  {
    id: 9,
    name: "Git & GitHub Workflow",
    description:
      "Khóa học này giúp bạn thành thạo Git, quản lý branch, merge, rebase, tag, pull request và cách làm việc nhóm hiệu quả trên GitHub.",
    level: "Cơ bản",
    price: 299000,
    tag_ids: [7], // Version Control
    created_at: "2024-12-15T08:30:00Z",
  },
  {
    id: 10,
    name: "Fullstack Web Developer 2025",
    description:
      "Khóa học tổng hợp giúp bạn trở thành lập trình viên fullstack: frontend (Vue/React) + backend (Laravel/Node) + deploy production.",
    level: "Chuyên sâu",
    price: 1299000,
    tag_ids: [1, 2, 5], // Frontend, Backend, Web Development
    created_at: "2024-11-01T13:00:00Z",
  },
];