import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean,
  src: string,
  alt?: string
}
export const Avatar = ({hasBorder = true, src, alt}: AvatarProps) => {
    return(
        <img
        className={hasBorder ?  styles.avatar : styles.avatarWithOutBorder }
        src={src}
        alt={alt}
      />
    )
}