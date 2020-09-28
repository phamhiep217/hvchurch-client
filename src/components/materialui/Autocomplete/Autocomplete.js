import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import PropTypes from 'prop-types';
import { change_alias } from '../../../helpers';

function renderInputComponent(inputProps) {
  const { classRe, classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        },
        className: classRe
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => (
          <span key={index} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value, suggestions) {
  const inputValue = change_alias(value);
  const inputLength = inputValue.length;
  let count = 0;
  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep = count < 5 && suggestion.name.search(inputValue) >= 0;
        if (keep) {
          count += 1;
        }
        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const useStyles = theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
});

const IntegrationAutosuggest = props => {
  const {
    label,
    keyState,
    contentState,
    data,
    handleChangeAC,
    classRe,
    onKeyDown
  } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const suggestions = data === null ? [] : data;
  const [stateSuggestions, setSuggestions] = React.useState([]);
  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value, suggestions));
  };
  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classRe,
          classes,
          label: label,
          value: contentState[keyState],
          onChange: handleChangeAC(keyState),
          onKeyDown: onKeyDown(),
          inputRef: node => {
            setAnchorEl(node);
          }
        }}
        theme={{
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderSuggestionsContainer={options => (
          <Popper
            anchorEl={anchorEl}
            open={Boolean(options.children)}
            style={{ zIndex: '1' }}
          >
            <Paper
              square
              {...options.containerProps}
              style={{ width: anchorEl ? anchorEl.clientWidth : undefined }}
            >
              {options.children}
            </Paper>
          </Popper>
        )}
      />
    </div>
  );
};

IntegrationAutosuggest.propTypes = {
  classRe: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  keyState: PropTypes.string.isRequired,
  contentState: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  handleChangeAC: PropTypes.func.isRequired
};

export default IntegrationAutosuggest;
