import { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { Text } from '@gnosis.pm/safe-react-components'

import { Modal } from 'src/components/Modal'
import { CSVReader } from 'react-papaparse'
import { ParseResult } from 'papaparse'
import { AddressBookEntry } from 'src/logic/addressBook/model/addressBook'
import { checksumAddress } from 'src/utils/checksumAddress'
import HelpInfo from 'src/routes/safe/components/AddressBook/HelpInfo'
import { validateCsvData, validateFile } from 'src/routes/safe/components/AddressBook/utils'
import { ChainId } from 'src/config/chain.d'
import { trackEvent } from 'src/utils/googleTagManager'
import { ADDRESS_BOOK_EVENTS } from 'src/utils/events/addressBook'

const ImportContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  margin: 24px;
  align-items: center;
  min-height: 100px;
  display: flex;
`

const InfoContainer = styled.div`
  background-color: "#000";
  color: #69fc99;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  text-align: center;
  margin-top: 16px;
`

type ImportEntriesModalProps = {
  importEntryModalHandler: (addressList: AddressBookEntry[]) => void
  isOpen: boolean
  onClose: () => void
}

const ImportEntriesModal = ({ importEntryModalHandler, isOpen, onClose }: ImportEntriesModalProps): ReactElement => {
  const [csvLoaded, setCsvLoaded] = useState(false)
  const [importError, setImportError] = useState('')
  const [entryList, setEntryList] = useState<AddressBookEntry[]>([])

  const handleImportEntrySubmit = () => {
    trackEvent({ ...ADDRESS_BOOK_EVENTS.IMPORT_BUTTON, label: entryList.length })
    setCsvLoaded(false)
    importEntryModalHandler(entryList)
  }

  const handleOnDrop = (parseResults: ParseResult<string>[], file: File) => {
    // Remove the header row
    const slicedData = parseResults.slice(1)
    const fileError = validateFile(file)
    if (fileError) {
      setImportError(fileError)
      return
    }
    const trimmedData: ParseResult<string>[] = []

    // Delete empty rows
    slicedData.forEach((row) => {
      if (!(row.data.length === 1 && !row.data[0])) {
        trimmedData.push(row)
      }
    })

    const dataError = validateCsvData(trimmedData)
    if (dataError) {
      setImportError(dataError)
      return
    }

    const formattedList = trimmedData.map(({ data }) => {
      return {
        address: checksumAddress(data[0].trim()),
        name: data[1].trim(),
        chainId: data[2].trim() as ChainId,
      }
    })
    setEntryList(formattedList)
    setImportError('')
    setCsvLoaded(true)
  }

  const handleOnError = (error: Error): void => {
    setImportError(error.message)
  }

  const handleOnRemoveFile = () => {
    setCsvLoaded(false)
    setImportError('')
  }

  const handleClose = () => {
    setCsvLoaded(false)
    setEntryList([])
    setImportError('')
    onClose()
  }

  return (
    <Modal description="Import address book" handleClose={handleClose} open={isOpen} title="Import address book">
      <Modal.Header onClose={handleClose}>
        <Modal.Header.Title>Import address book</Modal.Header.Title>
      </Modal.Header>
      <Modal.Body withoutPadding>
        <ImportContainer>
          <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}
            style={{
              dropArea: {
                borderColor: '#05de87',
                borderRadius: 8,
              },
              dropAreaActive: {
                borderColor: '#05de87',
              },
              dropFile: {
                width: 200,
                height: 100,
                background: '#fff',
                borderRadius: 8,
              },
              fileSizeInfo: {
                color: '#06fc99',
                lineHeight: 1,
                position: 'absolute',
                left: '10px',
                top: '12px',
              },
              fileNameInfo: {
                color: importError === '' ? '#05de87' : '#DB3A3D',
                backgroundColor: '#fff',
                fontSize: 14,
                lineHeight: 1.4,
                padding: '0 0.4em',
                margin: '1.2em 0 0.5em 0',
                maxHeight: '59px',
                overflow: 'hidden',
              },
              progressBar: {
                backgroundColor: '#05de87',
              },
              removeButton: {
                color: '#DB3A3D',
              },
            }}
          >
            <Text color="primary" size="xl">
              Drop your CSV file here <br />
              or click to upload.
            </Text>
          </CSVReader>
        </ImportContainer>
        <InfoContainer>
          {importError !== '' && (
            <Text size="xl" color="error">
              {importError}
            </Text>
          )}
          {!csvLoaded && importError === '' && (
            <Text color="primary" as="p" size="xl">
              Only CSV files exported from the Safe are allowed. <br />
              <HelpInfo />
            </Text>
          )}
          {csvLoaded && importError === '' && (
            <>
              <Text size="xl" as="span">{`You're about to import`}</Text>
              <Text size="xl" strong as="span">{` ${entryList.length} entries to your address book`}</Text>
            </>
          )}
        </InfoContainer>
      </Modal.Body>
      <Modal.Footer withoutBorder>
        <Modal.Footer.Buttons
          cancelButtonProps={{ onClick: () => handleClose() }}
          confirmButtonProps={{
            color: 'primary',
            disabled: !csvLoaded || importError !== '',
            onClick: handleImportEntrySubmit,
            text: 'Import',
          }}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default ImportEntriesModal
