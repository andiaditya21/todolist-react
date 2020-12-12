import React from 'react'
import PropTypes from 'prop-types'


const Container = ({ children, flexDirection, flexWrap, justifyContent, alignItems, alignContent }) => {
    const containerStyles = {
        display: "flex",
        flexDirection: `${flexDirection}`,
        flexWrap: `${flexWrap}`,
        justifyContent: `${justifyContent}`,         
        alignItems: `${alignItems}`,         
        alignContent: `${alignContent}`,         
    }
    console.log(alignItems)
    return <div className="flex-container" style={containerStyles}>{children}</div>
}

Container.defaultProps = {
    flexDirection : "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
}

Container.propTypes = {
    // children bisa memiliki 1 element / > 2 element
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node  
    ]),
    // value hanya bisa dipilih diantara list2 yang diberikan
    flexDirection: PropTypes.oneOf([
        "row", 
        "row-reverse",
        "column", 
        "column-reverse"
    ]),
    flexWrap: PropTypes.oneOf([
        "nowrap", 
        "wrap", 
        "wrap-reverse"
    ]),
    justifyContent: PropTypes.oneOf([
        "flex-start", 
        "flex-end", 
        "center", 
        "space-between", 
        "space-around", 
        "space-evenly", 
        "start", 
        "end", 
        "left", 
        "right"
    ]),
    alignItems: PropTypes.oneOf([
        "stretch", 
        "flex-start", 
        "flex-end", 
        "center", 
        "baseline", 
        "first-baseline", 
        "last-baseline",
        "start",
        "end",
        "self-start"
    ]),
    alignContent: PropTypes.oneOf([
        "stretch", 
        "flex-start", 
        "flex-end", 
        "center",
        "space-between", 
        "space-around", 
        "space-evenly",
        "left", 
        "right",
        "baseline", 
        "first-baseline", 
        "last-baseline",
        "start",
        "end",
        "self-start"
    ]),
}

export default Container;