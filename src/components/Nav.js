import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, ListItem, Drawer } from 'material-ui';


export default function Nav({ categories, onClick, onToggle, open }) {
    const to = category => (
        category.id === '1'
            ? '/all'
            : `/category/${category.id}`
    );

    return (
        <MuiThemeProvider>
            <div>
                <AppBar
                    title="Yahoo Shopping Ranking"
                    onLeftIconButtonClick={ () => onToggle(open) }
                />
                <Drawer
                    docked={false}
                    open={open}
                    onRequestChange={() => onToggle(open)}
                >
                    {categories.map(category => (
                        <ListItem
                            button
                            key={`list-item-${category.id}`}
                            onClick={() => onClick(to(category))}
                        >
                            {category.name}
                        </ListItem>
                    ))}
                </Drawer>
            </div>
        </MuiThemeProvider>
    );
}
Nav.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};
Nav.defaultProps = {
    categories: [],
    open: false
};
