import React, {FC} from 'react';

interface ImageProps extends React.HTMLProps<HTMLElement>{
    image:string;
}

const ImageComponent:FC<ImageProps> = ({image, className}) => {
    return (
        <img className={className} src={require(`../../assets/static/${image}`)}/>
    );
};

export default ImageComponent;