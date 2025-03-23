import React, { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const PaymentModal = ({ setIsOpen, isOpen, price }) => {
    const close = () => {
        setIsOpen(false);
    }

    const launchRazorPay = () => {
      
    }

    return (
      <>
      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <DialogPanel
              transition
              className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                Ready to watch? Kindly complete your payment.
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-gray-500">
                Kindly proceed with the payment using the following steps
              </p>
              <div className="mt-4 space-x-2">
                <Button
                  className="inline-flex justify-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                  onClick={launchRazorPay}
                >
                  Pay ${price}
                </Button>
                <Button
                  className="inline-flex justify-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                  onClick={close}
                >
                  Cancel Payment
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>    
    );
}

export default PaymentModal;