import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { CopyToClipboardBtn, Text } from '@gnosis.pm/safe-react-components'
import { useMedia } from 'react-use'
import { InlineEthHashInfo, InlinePrefixedEthHashInfo, StyledGridRow } from './styled'
import { getExplorerInfo } from 'src/config'
import { getByteLength } from 'src/utils/getByteLength'
import Value from 'src/routes/safe/components/Transactions/TxList/MethodValue'
import { HexEncodedData } from 'src/routes/safe/components/Transactions/TxList/HexEncodedData'

const FlexWrapper = styled.div<{ margin: number }>`
  display: flex;
  align-items: center;

  > :nth-child(2) {
    margin-left: ${({ margin }) => margin}px;
  }
`

const ValueWrapper = styled.div`
  min-width: 50%;
  flex-shrink: 0;
`

type TxDataRowType = {
  children?: ReactNode
  inlineType?: 'hash' | 'rawData' | 'address' | 'bytes'
  hasExplorer?: boolean
  title: string
  value?: string | null
  isArray?: boolean
  method?: string
  paramType?: string
}

const generateInlineTypeValue = (
  type: TxDataRowType['inlineType'],
  value?: string,
  hasExplorer?: boolean,
): ReactElement | null => {
  const below800 = useMedia('(max-width: 800px)')
  if (!value) return null
  switch (type) {
    case 'address':
      return (
        <InlinePrefixedEthHashInfo
          textSize={below800?"md":"xl"}
          hash={value}
          shortenHash={below800?3:8}
          showCopyBtn
          explorerUrl={getExplorerInfo(value)}
        />
      )
    case 'hash':
      return (
        <InlineEthHashInfo
          textSize={below800?"md":"xl"}
          hash={value}
          shortenHash={below800?3:8}
          showCopyBtn
          explorerUrl={hasExplorer ? getExplorerInfo(value) : undefined}
        />
      )
    case 'rawData':
      return (
        <FlexWrapper margin={5}>
          <Text size="xl">{value ? getByteLength(value) : 0} bytes</Text>
          <CopyToClipboardBtn textToCopy={value} />
        </FlexWrapper>
      )
    case 'bytes':
      return <HexEncodedData limit={60} hexData={value} />
  }
  return null
}

export const TxDataRow = ({
  children,
  inlineType,
  hasExplorer = true,
  title,
  value,
  isArray,
  method,
  paramType,
}: TxDataRowType): ReactElement | null => {
  const below800 = useMedia('(max-width: 800px)')
  if (value == undefined) return null
  return (
    <StyledGridRow>
      <Text size={below800?"md":"xl"} as="span" color="primary">
        <StyledText>{title}</StyledText>
      </Text>
      {isArray && value && method && paramType && (
        <ValueWrapper>
          <Value method={method} type={paramType} value={value} />
        </ValueWrapper>
      )}
      {!isArray && generateInlineTypeValue(inlineType, value, hasExplorer)}
      {!isArray && !inlineType && value && (
        <Text size={below800?"md":"xl"} as="span" color="primary">
          <StyledText>{value}</StyledText>
        </Text>
      )}
      {children}
    </StyledGridRow>
  )
}

const StyledText = styled.p`
  margin: 0;
`
