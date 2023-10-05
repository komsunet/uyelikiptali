/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
        :root {
            --background: 0 0% 100%;
            --foreground: 222.2 47.4% 11.2%;

            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;

            --popover: 0 0% 100%;
            --popover-foreground: 222.2 47.4% 11.2%;

            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;

            --card: 0 0% 100%;
            --card-foreground: 222.2 47.4% 11.2%;

            --primary: 222.2 47.4% 11.2%;
            --primary-foreground: 210 40% 98%;

            --secondary: 210 40% 96.1%;
            --secondary-foreground: 222.2 47.4% 11.2%;

            --accent: 210 40% 96.1%;
            --accent-foreground: 222.2 47.4% 11.2%;

            --destructive: 0 100% 50%;
            --destructive-foreground: 210 40% 98%;

            --ring: 215 20.2% 65.1%;

            --radius: 0.5rem;
        }
        
      body {
        background-color: #ffffff;
        overflow-x: hidden;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }
