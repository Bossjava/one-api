import PropTypes from 'prop-types';
import { Tooltip, Stack, Container } from '@mui/material';
import Label from 'ui-component/Label';
import { styled } from '@mui/material/styles';
import { copy } from 'utils/common';

const TooltipContainer = styled(Container)({
  maxHeight: '250px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '0px' // Set the width to 0 to hide the scrollbar
  }
});

const NameLabel = ({ name, models }) => {
  let modelMap = [];
  modelMap = models.split(',');
  modelMap.sort();

  return (
    <Tooltip
      title={
        <TooltipContainer>
          <Stack spacing={1}>
            {modelMap.map((item, index) => {
              return (
                <Label
                  variant="ghost"
                  key={index}
                  onClick={() => {
                    copy(item, '模型名称');
                  }}
                >
                  {item}
                </Label>
              );
            })}
          </Stack>
        </TooltipContainer>
      }
      placement="top"
    >
      <span>{name}</span>
    </Tooltip>
  );
};

NameLabel.propTypes = {
  name: PropTypes.string,
  models: PropTypes.string
};

export default NameLabel;
