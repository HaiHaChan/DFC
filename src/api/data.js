/**
 * Mocking client-server processing
 */
const _stories = [
    {
        "id": 1,
        "title": "Tình yêu là một loại dưỡng khí kì diệu",
        "price": 500.01,
        "author": "Thẩm Dục Luân",
        "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "2.jpg",
    },
    {
        "id": 2,
        "title": "Khoảnh khắc tan vỡ",
        "price": 10.99,
        "author": "Thẩm Khải Ni",
        "description": "Ngôn tình",
        "image": "3.jpg",
    },
    {
        "id": 3,
        "title": "Chấp niệm",
        "price": 19.99,
        "author": "Thiệu Ly",
        "description": "Đam mỹ kinh điển",
        "image": "6.jpg",
    }
  ]
  
  export default {
    getStories (cb) {
      setTimeout(() => cb(_stories), 100)
    }
  }
  