import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.value}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='Search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() =>
                            this.props.searchMovies(this.state.search, this.state.type)
                        }
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className='with-gap'
                            type='radio'
                            name='type'
                            value='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>all&nbsp;&nbsp;</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            type='radio'
                            name='type'
                            value='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>movie&nbsp;&nbsp;</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            type='radio'
                            name='type'
                            value='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>series&nbsp;&nbsp;</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
