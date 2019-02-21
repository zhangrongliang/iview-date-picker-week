
import {clearHours} from '../util';

export default {
    name: 'PanelTable',
    props: {
        tableDate: {
            type: Date,
            required: true
        },
        disabledDate: {
            type: Function
        },
        selectionMode: {
            type: String,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        rangeState: {
            type: Object,
            default: () => ({
                from: null,
                to: null,
                selecting: false
            })
        },
        focusedDate: {
            type: Date,
            required: true,
        }
    },
    computed: {
        dates(){
            const {selectionMode, value, rangeState} = this;
            const rangeSelecting = selectionMode === 'range' && rangeState.selecting;
            return rangeSelecting ? [rangeState.from] : value;
        },
    },
    methods: {
        handleClick (cell) {
            //周数据处理
            if(cell.type !=='weekLabel') return
              this.$emit('on-pick', cell);
              this.$emit('on-pick-click');
        },
        handleMouseMove (cell) {
            if (!this.rangeState.selecting) return;
            if (cell.disabled) return;
            const newDate = cell.date;
            this.$emit('on-change-range', newDate);
        },
    }
};
