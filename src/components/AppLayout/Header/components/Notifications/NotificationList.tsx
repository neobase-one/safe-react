import { ReactElement } from 'react'
import styled from 'styled-components'
import { List, Typography } from '@material-ui/core'

import { NotificationsState } from 'src/logic/notifications/store/notifications'
import { NOTIFICATION_LIMIT } from 'src/components/AppLayout/Header/components/Notifications'
import { StyledScrollableBar } from 'src/routes/safe/components/Transactions/TxList/styled'
import { primary } from 'src/theme/variables'
import NotificationItem from 'src/components/AppLayout/Header/components/Notifications/NotificationItem'

import Bell from './assets/bell.svg'

type NotificationListProps = {
  notifications: NotificationsState
  handleClickAway: () => void
}

const NotificationList = ({ notifications, handleClickAway }: NotificationListProps): ReactElement => {
  if (!notifications.length) {
    return (
      <Wrapper>
        <img src={Bell} alt="No notifications" />
        <Description>No notifications</Description>
      </Wrapper>
    )
  }

  return (
    <ScrollContainer $showScrollbar={notifications.length > NOTIFICATION_LIMIT}>
      <StyledList>
        {notifications.map((notification) => (
          <NotificationItem key={notification.timestamp} {...notification} handleClickAway={handleClickAway} />
        ))}
      </StyledList>
    </ScrollContainer>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 147px; // Height of one line notification
`

const Description = styled(Typography)`
  color: ${primary};
  padding-top: 8px;
  @media (max-width: 800px) {
    padding-bottom: 55px;
  }
`

const StyledList = styled(List)`
  padding: 0;
`

const ScrollContainer = styled(StyledScrollableBar)<{ $showScrollbar: boolean }>`
  height: ${({ $showScrollbar: $scroll }) => ($scroll ? '500px' : 'auto')};
  overflow-x: hidden;
  overflow-y: auto;
`

export default NotificationList
