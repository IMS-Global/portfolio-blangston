import React, { useState } from 'react'
import { Flex, Box, Text } from '@primer/components'
import { Button, List, Header } from '../../styled/Components'

const journalArticles = [
  'Yu Q, Guyot R, de Kochko A, Byers A, Navajas-Perez R, Langston BJ, Dubreuil-Tranchant C, Paterson AH, Poncet V, Nagai C, Ming R. <<Microcollinearity and Genome Evolution in the Vicinity of an Ethylene Receptor Gene of Cultivated Diploid and Allotetraploid Coffee Species (Coffea)>>. The Plant Journal, Web. 13 May 2011. (Currently In Print)',
  'Langston BJ, Vaghchhipawala ZE, Clemente T, Baenziger S, Schimelfenig J, Dickman MB (2003) Expression of Anti- Apoptotic Genes in Spring Wheat Confer Resistance to Necrotrophic Pathogens (Fusarium graminearum) by Inhibiting Host-Cell Death, SCAB Forum 2003, Poster and Abstract',
  'Langston BJ, Bai S, Jones ML. Increases in DNA fragmentation and induction of a senescence-specific nuclease are delayed during corolla senescence in ethylene-insensitive (etr1-1) transgenic petunias. J. Exp Bot. 2005 Jan; 56 (409):15-23, E-pub 2004 Oct. 8',
  'Jones, ML, Langston BJ, Johnson F. Pollination-Induced Senescence of Ethylene Sensitive and Insensitive Petunias, Conference for the Biology and Biotechnology of the Plant Hormone Ethylene III, Nato Science Series Sub Series I Life and Behavioral Sciences. 2003, vol. 349, pag. 324-327',
  'Jones, ML, Johnson F, Langston BJ. (2001) Molecular Regulation of Flower Senescence by Ethylene, Proceedings of the Twenty-Eighth Annual Meeting, Plant Growth Regulation Society of America, July 1-5, G.W. Stutte Dymanac Corporation eds., Omni press, Madison, WI. pp. 20',
  'Langston BJ and Jones ML, (2002) Senescence Related Nuclease Activity in Ethylene-Insensitive Petunia Corollas, Annual Meeting of the American Society of Plant Biologist (ASPB), Poster Abstract #361',
]

const FunFacts = ({...rest}) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(!show)

  const renderJournalArticles = () => {
    if(journalArticles && journalArticles.length > 0){
      return journalArticles.map((ja, index) => (
        <List.Item key={index}>{ja}</List.Item>
      ))
    }
  }

  return (
    <Flex flexDirection='column'>
      <Box backgroundColor='#F6F2ED' p={16}>
        <Header.H1>Fun Facts</Header.H1>
        <Text as='p'>
          I published 6 Peer Reviewed Science Articles between 2002 and 2011
        </Text>
        <Button.Plain onClick={toggleShow}>
          {show ? 'Close' : 'View'} Publications
        </Button.Plain>
      </Box>
      {show && (
        <Box>
          <List.UnOrdered>
            {renderJournalArticles()}
          </List.UnOrdered>
        </Box>
      )}
    </Flex>
  )
}

export default FunFacts
