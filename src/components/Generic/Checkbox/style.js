import styled from 'styled-components';
import { Checkbox } from 'antd';

const AntCheckbox = styled(Checkbox)`
  width: ${({ width }) => width || '100%'};
`;
export { AntCheckbox };
