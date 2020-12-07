<template>
    <div class="layui-form-item">
        <label class="layui-form-label" :for="inputName">{{ inputLabel }}</label>
        <div class="layui-input-inline">
            <input
                :id="inputName"
                :type="inputType"
                autocomplete="off"
                class="layui-input"
                :name="inputName"
                :placeholder="inputPlaceholder"
                :value="value"
                @input="handleChange"
                @blur="handleBlur"
            />
        </div>
        <slot></slot>
        <div
            class="layui-form-mid error-message"
            v-show="errorMessage || meta.valid"
        >
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
import {useField} from 'vee-validate';

export default {
    props: {
        inputLabel: {
            type: String,
            required: true,
        },
        inputName: {
            type: String,
            required: true,
        },
        inputType: {
            type: String,
            default: 'text',
        },
        inputPlaceholder: {
            type: String,
            default: '',
        },
        inputValue: {
            type: String,
            default: '',
        }
    },
    setup(props) {
        const {
            value,
            errorMessage,
            handleBlur,
            handleChange,
            meta,
        } = useField(props.inputName, undefined, {
            initialValue: props.inputValue,
        });

        return {
            handleChange,
            handleBlur,
            errorMessage,
            value,
            meta,
        };
    }
}
</script>

<style lang="scss" scoped>
input {
    width: 190px;
}

.error-message {
    color: red;
}
</style>