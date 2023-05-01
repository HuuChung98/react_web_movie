Cấu trúc một Project React gồm:

- src
- components:

  - chứa những component thuần về mắc UI(nhận vào prosp và render ra UI), ko có mặc logic ở những component này
  - Mang tính chất tái sủ dụng: Button, Cards, Model, Header
  - Sử dụng một số thư viện sẵn có: nhằm cung cấp các Component được design sẵn giúp cho project nhanh hơn
    eg: mui.com, ant design, mantine 

- modules:
  - Nơi chứa những component chính cho ứng dụng: sẽ có xử lý logic: call API, nghiệp vụ
  - Có thể là 1 page hoặc tập hợp một nhóm các chức năng
  * Home (thuộc modules)
    - components:
      - chỉ chứa các components được sử dụng trực tiếp trong modules này
      - Những component này chứa những tác vụ logic (call API)
    - pages:
      - Components kết nối trực tiếp các routes
      - chứa các components nằm trong components của folder Home
    - slices: chỉ xử lý các phần nội bộ bên trong Component Home
  * Auth: (chứa các component thực hiện đăng nhập và đăng kí)
  - Tạo thêm Component MovieManagement(Admin movie) cho quản trị viên

- APIS/Service:

  - Setup các thư viện gọi API (axios)
  - Định nghĩa các function gọi API trong này
  -

- Đối với phần Auth component

1.  Login

- ta phải làm việc với form với rất nhìu input
- 2 thư viện sử dụng để lấy giá trị Input
  ---- react-hook-form
  ---- formmik

2. Register:

- với form register ta cần điền rất nhìu thông tin, do đó cần ta sẽ sử dụng kĩ thuật để validate các Input có thỏa điều kiện hay không.
- sử dụng thêm thư viện con của react-hook-form là yup
  https://react-hook-form.com/get-started#SchemaValidation
