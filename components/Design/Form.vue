<template>
	<div class="mb-3">
		<label for="exampleInputEmail1" class="form-label">{{ label }}</label>

		<select 
	    	v-if="type === 'select'"
	      	@change="$emit('input', $event.target.value)"
	      	:value="value"
	      	class="form-control"
	    >
	      	<slot></slot>
	    </select>

	    <input 
	    	v-else
	      	:type="type" 
	      	@change="$emit('input', $event.target.value)"
	      	:value="value" 
	      	class="form-control"
	    >
		<p :class="{ 'text-danger': hasError, 'text-gray': !hasError}" class="text-sm">{{ helperText }}</p>	
  	</div>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				required: true
			},
			type: {
				type: String,
				default: 'text'
			},
			value: {
				type: [String, Number],
				required: false
			},
			helperText: {
                type: String,
                required: false
            },
            hasError: {
                type: Boolean,
                required: false
            },
		}
	}
</script>