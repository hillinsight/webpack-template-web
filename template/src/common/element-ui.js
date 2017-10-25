/* Automatic generated by './build/bin/build-entry.js' */

import Pagination from 'element-ui/packages/pagination/index';
import Dialog from 'element-ui/packages/dialog/index';
import Autocomplete from 'element-ui/packages/autocomplete/index';
import Dropdown from 'element-ui/packages/dropdown/index';
import DropdownMenu from 'element-ui/packages/dropdown-menu/index';
import DropdownItem from 'element-ui/packages/dropdown-item/index';
import Menu from 'element-ui/packages/menu/index';
import Submenu from 'element-ui/packages/submenu/index';
import MenuItem from 'element-ui/packages/menu-item/index';
import MenuItemGroup from 'element-ui/packages/menu-item-group/index';
import Input from 'element-ui/packages/input/index';
import InputNumber from 'element-ui/packages/input-number/index';
import Radio from 'element-ui/packages/radio/index';
import RadioGroup from 'element-ui/packages/radio-group/index';
import RadioButton from 'element-ui/packages/radio-button/index';
import Checkbox from 'element-ui/packages/checkbox/index';
import CheckboxButton from 'element-ui/packages/checkbox-button/index';
import CheckboxGroup from 'element-ui/packages/checkbox-group/index';
import Switch from 'element-ui/packages/switch/index';
import Select from 'element-ui/packages/select/index';
import Option from 'element-ui/packages/option/index';
import OptionGroup from 'element-ui/packages/option-group/index';
import Button from 'element-ui/packages/button/index';
import ButtonGroup from 'element-ui/packages/button-group/index';
import Table from 'element-ui/packages/table/index';
import TableColumn from 'element-ui/packages/table-column/index';
import DatePicker from 'element-ui/packages/date-picker/index';
import TimeSelect from 'element-ui/packages/time-select/index';
import TimePicker from 'element-ui/packages/time-picker/index';
import Popover from 'element-ui/packages/popover/index';
import Tooltip from 'element-ui/packages/tooltip/index';
import MessageBox from 'element-ui/packages/message-box/index';
import Breadcrumb from 'element-ui/packages/breadcrumb/index';
import BreadcrumbItem from 'element-ui/packages/breadcrumb-item/index';
import Form from 'element-ui/packages/form/index';
import FormItem from 'element-ui/packages/form-item/index';
import Tabs from 'element-ui/packages/tabs/index';
import TabPane from 'element-ui/packages/tab-pane/index';
import Tag from 'element-ui/packages/tag/index';
import Tree from 'element-ui/packages/tree/index';
import Alert from 'element-ui/packages/alert/index';
import Notification from 'element-ui/packages/notification/index';
import Slider from 'element-ui/packages/slider/index';
import Loading from 'element-ui/packages/loading/index';
import Icon from 'element-ui/packages/icon/index';
import Row from 'element-ui/packages/row/index';
import Col from 'element-ui/packages/col/index';
import Upload from 'element-ui/packages/upload/index';
import Progress from 'element-ui/packages/progress/index';
import Spinner from 'element-ui/packages/spinner/index';
import Message from 'element-ui/packages/message/index';
import Badge from 'element-ui/packages/badge/index';
import Card from 'element-ui/packages/card/index';
import Rate from 'element-ui/packages/rate/index';
import Steps from 'element-ui/packages/steps/index';
import Step from 'element-ui/packages/step/index';
import Carousel from 'element-ui/packages/carousel/index';
import Scrollbar from 'element-ui/packages/scrollbar/index';
import CarouselItem from 'element-ui/packages/carousel-item/index';
import Collapse from 'element-ui/packages/collapse/index';
import CollapseItem from 'element-ui/packages/collapse-item/index';
import Cascader from 'element-ui/packages/cascader/index';
import ColorPicker from 'element-ui/packages/color-picker/index';
import Transfer from 'element-ui/packages/transfer/index';
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    Scrollbar,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer,
    CollapseTransition
];

const install = function (Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    components.map(component => {
        if (component.name) {
            Vue.component(component.name, component);
        }
    });

    Vue.use(Loading.directive);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    version: '1.4.6',
    locale: locale.use,
    i18n: locale.i18n,
    install,
    CollapseTransition,
    Loading,
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    MessageBox,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Notification,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Message,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    Scrollbar,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer
};
