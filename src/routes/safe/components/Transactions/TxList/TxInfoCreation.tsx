import { ReactElement } from 'react'
import styled from 'styled-components'
import { Text } from '@gnosis.pm/safe-react-components'
import { Creation } from '@gnosis.pm/safe-react-gateway-sdk'
import { useMedia } from 'react-use'
import { getExplorerInfo } from 'src/config'
import { formatDateTime } from 'src/utils/date'
import { Transaction } from 'src/logic/safe/store/models/types/gateway.d'
import { NOT_AVAILABLE } from './utils'
import { TxDetailsContainer } from './styled'
import { KnownAddressType, useKnownAddress } from './hooks/useKnownAddress'
import PrefixedEthHashInfo from 'src/components/PrefixedEthHashInfo'
import { TxDataRow } from './TxDataRow'
import { md } from 'src/theme/variables'

const StyledTxCreationAddress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${md};
  padding: 0 ${md};
  @media (max-width: 800px) {
    padding: 0 5px;
    align-items: center;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }
`

export const TxInfoCreation = ({ transaction }: { transaction: Transaction }): ReactElement => {
  const below800 = useMedia('(max-width: 800px)')
  const txInfo = transaction.txInfo as Creation
  const timestamp = transaction.timestamp

  const generateCreatorTxData = (
    title,
    creationEntity: Creation['creator' | 'factory' | 'implementation'],
    address: KnownAddressType,
  ): ReactElement => (
    <StyledTxCreationAddress>
      <Text color="primary" size={below800?"sm":"xl"} strong>
        <Details>{title}:</Details>
      </Text>
      {creationEntity ? (
        <PrefixedEthHashInfo
          textSize={below800?"md":"xl"}
          hash={creationEntity.value}
          shortenHash={below800?3:32}
          showCopyBtn
          explorerUrl={getExplorerInfo(creationEntity.value)}
          customAvatar={address?.logoUri || undefined}
        />
      ) : (
        <Text size={below800?"md":"xl"} as="span">
          {NOT_AVAILABLE}
        </Text>
      )}
    </StyledTxCreationAddress>
  )

  return (
    <TxDetailsContainer>
      <div className="tx-creation">
        <div>
          {generateCreatorTxData('Creator', txInfo.creator, useKnownAddress(txInfo.creator))}
          {generateCreatorTxData('Factory', txInfo.factory, useKnownAddress(txInfo.factory))}
          {generateCreatorTxData('Mastercopy', txInfo.implementation, useKnownAddress(txInfo.implementation))}
        </div>
        <div>
          <TxDataRow title={below800?"Tx Hash:":"Transaction Hash:"} value={txInfo.transactionHash} inlineType="hash" />
          <TxDataRow title="Created:" value={formatDateTime(timestamp)} />
        </div>
      </div>
    </TxDetailsContainer>
  )
}
const Details = styled.div`
  color: #06fc99;
  font-size: 16px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`
