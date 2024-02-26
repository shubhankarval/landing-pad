import Image from 'next/image';

interface ImageProps{
    src: string;
    type?:string;
    alt?:string;
    height?:number;
    width?:number
    className?:string;
}

export default function NextImage({src, type, alt, height, width, className}:ImageProps) {
  return (
    <Image
        src={src + '.' + (type ? type : 'svg')}
        alt={alt ? alt : ''}
        height={height ? height : 0}
        width={width ? width : 0}
        className={className}
    />
  )
}
