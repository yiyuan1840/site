const getClasses = (isCover, isWindow) => {
  const list = []

  if (isCover) {
    list.push('cover')
  }

  if (isWindow) {
    list.push('frame')
  }

  return list.join(' ')
}

const Image = ({ width, src, isCover, isWindow }) => (
  <figure className={getClasses(isCover, isWindow)}>
    <img width={width} src={src}/>

    <style jsx>{`
      img {
        max-width: 100%;
      }

      figure {
        margin: 20px 0;
        text-align: center;
      }

      .frame {
        margin: 40px 0;
      }

      .frame img {
        border-radius: 8px;
        border: 1px solid #B9B9B9;
        box-shadow: 0px 0px 30px 1px rgba(170, 170, 170, 1);
      }

      .cover {
        margin: -45px -30px 30px -30px;
      }

      .cover img {
        max-width: none;
        width: 100%;
        object-fit: cover;
      }

      @media (min-width: 768px) {
        figure {
          margin: 40px 0;
        }

        .frame {
          margin: 50px 0;
        }

        .cover {
          margin: 0 0 40px 0;
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          font-size: 0;
          line-height: 0;
        }
      }
    `}</style>
  </figure>
)

export default Image
export { Image }
