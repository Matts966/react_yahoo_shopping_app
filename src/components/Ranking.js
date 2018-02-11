import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import Button from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Ranking extends React.Component {
    componentWillMount() {
        this.props.onMount(this.props.categoryId);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId)
        }
    }

    render() {
        const { category, ranking, error } = this.props;

        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{
                    typeof category !== 'undefined'
                        ? `${category.name}のランキング`
                        : ''
                }</h2>
                {(() => {
                    if (error) {
                        return <p>エラーが発生しました。リロードしてください。</p>;
                    } else if (typeof ranking === 'undefined') {
                        return <p>読み込み中...</p>
                    } else {
                        return ranking.map((item, i) => (
                            <MuiThemeProvider>
                                <Card
                                    key={`ranking-item-${item.code}`}
                                    style={{ maxWidth:'500px', margin: '32px auto' }}
                                >
                                    <CardMedia>
                                        <img src={item.imageUrl} alt="" />
                                    </CardMedia>
                                    <CardTitle title={`${i + 1}位  ${item.name}`} />
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            href={item.url}
                                            primary
                                            labelColor="#fff"
                                            label="購入ページ"
                                        />
                                    </CardActions>
                                </Card>
                            </MuiThemeProvider>
                                ));
                    }
                })()}
            </div>
        );
    }
}
Ranking.propTypes = {
    categoryId: PropTypes.string.isRequired,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,

    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),

    ranking: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),
    error: PropTypes.bool.isRequired
};
Ranking.defaultProps = {
    categoryId: '1'
};