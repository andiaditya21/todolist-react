import react from 'react';
import PropTypes from 'prop-types'

const Item = ({ children, flex, align }) => {
    const itemStyles = {
        flex: `${flex}`,
        align: `${align}`
    }
    return <div className="flex-item" style={itemStyles}>{children}</div>
} 

Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    align: PropTypes.oneOf(["center", "left", "right"])
}

export default Item;