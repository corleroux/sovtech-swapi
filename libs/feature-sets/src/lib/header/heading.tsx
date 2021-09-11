import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeadingProps {}

const StyledHeading = styled.div`
  color: pink;
`;

export function Heading(props: HeadingProps) {
  return (
    <StyledHeading>
      <Header background="light-4" pad="medium" height="xsmall">
        <Anchor
          href="/"
          icon={<GrommetIcon color="brand" />}
          label="Cor le Roux"
        />
        <ResponsiveContext.Consumer>
          {(size) =>
            size === 'small' ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: 'bottom', right: 'right' } }}
                  icon={<MenuIcon color="brand" />}
                  items={[
                    {
                      label: <Box pad="small">Cor le Roux</Box>,
                      href: '/',
                    },
                  ]}
                />
              </Box>
            ) : (
              <Box justify="end" direction="row" gap="medium"></Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </StyledHeading>
  );
}

export default Heading;
