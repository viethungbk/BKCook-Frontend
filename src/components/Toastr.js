import toastr from 'toastr'
import '../../node_modules/toastr/build/toastr.min.css'

// toastr.options = {
//   "closeButton": true,
//   "debug": true,
//   "newestOnTop": false,
//   "progressBar": false,
//   "positionClass": "toast-top-right",
//   "preventDuplicates": false,
//   "showDuration": "300",
//   "hideDuration": "1000",
//   "timeOut": "5000",
//   "extendedTimeOut": "1000",
//   "showEasing": "swing",
//   "hideEasing": "linear",
//   "showMethod": "fadeIn",
//   "hideMethod": "fadeOut"
// }

const Toastr = {
  success,
  error
}

function success(message) {
  toastr.success(message)
}

function error({ errCode, message }) {
  if (message) {
    toastr.error(message)
  } else {
    let errMessage = ''
    switch(errCode) {
      case 400:
        errMessage = 'Người dùng không hợp lệ'
        break
      default:
        break
    }
    
    toastr.error(errMessage)
  }
}

export default Toastr