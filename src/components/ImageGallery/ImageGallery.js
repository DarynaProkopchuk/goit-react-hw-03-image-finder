import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ img, onClick }) => {
    return (
        <ul className={styles.ImageGallery}>
            {img.map(({ id, webformatURL, largeImageURL, tags }) => (
                <li key={id}>
                    <ImageGalleryItem
                        url={webformatURL}
                        alt={tags}
                        onClick={() => onClick(largeImageURL, tags)}
                    />
                </li>
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    img: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
    onClick: PropTypes.func.isRequired,
};

export default ImageGallery;