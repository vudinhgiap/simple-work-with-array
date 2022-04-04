import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ClearIcon from "@material-ui/icons/Clear";
import PropTypes from "prop-types";

class EnhancedSearch extends Component<any, any> {
  static propTypes = {
    handleClearSearch: PropTypes.func,
    handleSearch: PropTypes.func,
    handleValueChange: PropTypes.func,
    placeholder: PropTypes.string,
  };
  static defaultProps = {
    handleClearSearch: () => {},
    handleSearch: () => {},
    handleValueChange: () => {},
    placeholder: "",
  };
  constructor(props: any) {
    super(props);
    this.state = {
      keyword: "",
      isShowIconClear: false,
    };
  }
  reset() {
    this.setState({
      keyword: "",
      isShowIconClear: false,
    });
  }
  handleChangeSearch = (event: any) => {
    this.setState(
      {
        keyword: event.target.value,
        isShowIconClear: true,
      },
      () => {
        this.props.handleValueChange(this.state.keyword);
      }
    );
  };
  handleClearText = (event: any) => {
    var keyword = "";
    this.props.handleClearSearch();
    this.setState(
      {
        keyword: keyword,
        isShowIconClear: false,
      },
      () => {
        this.props.handleValueChange(this.state.keyword);
      }
    );
  };
  handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      this.props.handleSearch(this.state.keyword);
    }
  };
  render() {
    const {
      classes,
      placeholder,
      handleSearch,
      handleClearSearch,
      handleValueChange,
      ...other
    } = this.props;
    const { keyword, isShowIconClear } = this.state;

    return (
      <div className={classes.search} {...other}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={placeholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          className={classes.input}
          inputProps={{ "aria-label": "search" }}
          value={keyword}
          onChange={this.handleChangeSearch}
          onKeyDown={this.handleKeyDown}
        />
        {isShowIconClear === true ? (
          <ClearIcon
            className={classes.clearIcon}
            onClick={this.handleClearText}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withStyles(useStyles)(EnhancedSearch);
