import React, { useMemo } from 'react'

import * as RD from '@devexperts/remote-data-ts'
import { BNBChain } from '@xchainjs/xchain-binance'
import { Spin } from 'antd'
import * as FP from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { useObservableState } from 'observable-hooks'

import { SendFormBNB } from '../../../components/wallet/txs/send'
import { useBinanceContext } from '../../../contexts/BinanceContext'
import { useChainContext } from '../../../contexts/ChainContext'
import { useMidgardContext } from '../../../contexts/MidgardContext'
import { useThorchainQueryContext } from '../../../contexts/ThorchainQueryContext'
import { useWalletContext } from '../../../contexts/WalletContext'
import { liveData } from '../../../helpers/rx/liveData'
import { getWalletBalanceByAddressAndAsset } from '../../../helpers/walletHelper'
import { useNetwork } from '../../../hooks/useNetwork'
import { useOpenExplorerTxUrl } from '../../../hooks/useOpenExplorerTxUrl'
import { useValidateAddress } from '../../../hooks/useValidateAddress'
import { FeeRD } from '../../../services/chain/types'
import { WalletBalances } from '../../../services/clients'
import { DEFAULT_BALANCES_FILTER, INITIAL_BALANCES_STATE } from '../../../services/wallet/const'
import { SelectedWalletAsset, WalletBalance } from '../../../services/wallet/types'
import * as Styled from '../Interact/InteractView.styles'

type Props = {
  asset: SelectedWalletAsset
  emptyBalance: WalletBalance
}

export const SendViewBNB: React.FC<Props> = (props): JSX.Element => {
  const { asset, emptyBalance } = props

  const { network } = useNetwork()

  const { openExplorerTxUrl, getExplorerTxUrl } = useOpenExplorerTxUrl(O.some(BNBChain))

  const {
    balancesState$,
    keystoreService: { validatePassword$ }
  } = useWalletContext()

  const [{ balances: oBalances }] = useObservableState(
    () => balancesState$(DEFAULT_BALANCES_FILTER),
    INITIAL_BALANCES_STATE
  )
  const {
    service: {
      pools: { poolsState$ }
    }
  } = useMidgardContext()
  const poolsRD = useObservableState(poolsState$, RD.pending)
  const poolDetails = RD.toNullable(poolsRD)?.poolDetails ?? []

  const oWalletBalance = useMemo(
    () =>
      FP.pipe(
        oBalances,
        O.chain((balances) =>
          getWalletBalanceByAddressAndAsset({ balances, address: asset.walletAddress, asset: asset.asset })
        )
      ),
    [asset, oBalances]
  )

  const { transfer$ } = useChainContext()
  const { thorchainQuery } = useThorchainQueryContext()

  const { fees$, reloadFees } = useBinanceContext()

  const [feeRD] = useObservableState<FeeRD>(
    () =>
      FP.pipe(
        fees$(),
        liveData.map((fees) => fees.fast)
      ),
    RD.initial
  )

  const { validateAddress } = useValidateAddress(BNBChain)

  return FP.pipe(
    oWalletBalance,
    O.fold(
      () => (
        <Spin>
          <Styled.Container>
            <SendFormBNB
              asset={asset}
              balances={FP.pipe(
                oBalances,
                O.getOrElse<WalletBalances>(() => [])
              )}
              balance={emptyBalance}
              transfer$={transfer$}
              openExplorerTxUrl={openExplorerTxUrl}
              getExplorerTxUrl={getExplorerTxUrl}
              addressValidation={validateAddress}
              fee={feeRD}
              reloadFeesHandler={reloadFees}
              validatePassword$={validatePassword$}
              thorchainQuery={thorchainQuery}
              network={network}
              poolDetails={poolDetails}
            />
          </Styled.Container>
        </Spin>
      ),
      (walletBalance) => (
        <Styled.Container>
          <SendFormBNB
            asset={asset}
            balances={FP.pipe(
              oBalances,
              O.getOrElse<WalletBalances>(() => [])
            )}
            balance={walletBalance}
            transfer$={transfer$}
            openExplorerTxUrl={openExplorerTxUrl}
            getExplorerTxUrl={getExplorerTxUrl}
            addressValidation={validateAddress}
            fee={feeRD}
            reloadFeesHandler={reloadFees}
            validatePassword$={validatePassword$}
            thorchainQuery={thorchainQuery}
            network={network}
            poolDetails={poolDetails}
          />
        </Styled.Container>
      )
    )
  )
}
