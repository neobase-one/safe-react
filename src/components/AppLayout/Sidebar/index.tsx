import List, { ListItemType } from 'src/components/List'
import SafeHeader from './SafeHeader'

type Props = {
  safeAddress?: string
  safeName?: string
  balance?: string
  granted: boolean
  onToggleSafeList: () => void
  onReceiveClick: () => void
  onNewTransactionClick: () => void
  items: ListItemType[]
}

const Sidebar = ({
  items,
  balance,
  safeAddress,
  safeName,
  granted,
  onToggleSafeList,
  onReceiveClick,
  onNewTransactionClick,
}: Props): React.ReactElement => {
  return (
    <>
      <div style={{ marginTop: '2rem' }}>
        <SafeHeader
          address={safeAddress}
          safeName={safeName}
          granted={granted}
          balance={balance}
          onToggleSafeList={onToggleSafeList}
          onReceiveClick={onReceiveClick}
          onNewTransactionClick={onNewTransactionClick}
        />
      </div>

      {items.length ? <List items={items} /> : null}
    </>
  )
}

export default Sidebar
