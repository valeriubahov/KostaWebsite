import React from 'react';
import { Paragraph, H1, P1 } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, WorkDiv, JsImg, BackendImg, WhiteBlock } from './styles';

const Work = ({ user }) => {
  return (
    <WorkDiv>
      <H1>Get a quote!</H1>
      <WorkItem>
        <WhiteBlock>
          <Paragraph>We proudly service the greater area of the HRM.</Paragraph>
          <P1>CALL <a href="tel:+9028091815" class="headerContactItem">902-809-1815</a></P1>
          {/* <P1>EMAIL <a href="mailto:namesurname@gmail.com">namesurname@gmail.com</a></P1> */}
        </WhiteBlock>
      </WorkItem>
    </WorkDiv>
  );
};

export default Work;