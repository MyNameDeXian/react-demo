import React, { Component } from 'react'

import './imagePicker.scss'

class ImagePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			imgs: [],
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.upLoad === false){
			let { imgs, files } = this.state;
			this.refs[imgs.length-1].value = '';
			files.pop();
			imgs.pop();
			this.setState({ imgs, files });
		}
	}
	render() {
		let { title } = this.props;
		let { imgs } = this.state;
		return(
			<div className="image-picker">
				<header>{ title }</header>
				<div className="picker-box">
					{ this.makePickerItems(3) }
				</div>
			</div>
		)
	}
	pickerItem = ( key ) =>{
		let { imgs } = this.state;
		if(imgs.length < key) return null;
		return(
			<div key={key} className="picker-item" style={ imgs[key] }> 
				{ imgs[key] ? null : <span> + </span> }
				{
					imgs[key] == null
					? null
					: <div onClick={ this.removeImage.bind(this, key) } className="close" > x </div>
				}
				<input ref={key} onChange={ this.onChangeFile } type="file" name="file" accept="image/jpg,image/jpeg,image/png,image/gif"/>
			</div>
		)
	}
	makePickerItems = ( count ) =>{
		let result = [];
		for(let i=0; i< count; i++){
			result.push( this.pickerItem(i));
		}
		return result;
	}
	onChangeFile = (e) =>{
		let file = e.target.files[0];
		if( !file ) return;
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			// console.log(e.target)
			let dataURL = e.target.result
			if (!dataURL) {
            alert('获取图片失败');
            return;
         }
			this.addImage( dataURL, file );
		}
	}
	removeImage = ( key ) =>{
		let { imgs, files } = this.state;
		let { onChange } = this.props;
		this.refs[imgs.length-1].value = '';
		files.splice(key, 1);
		imgs.splice(key, 1);
		console.log()
		this.setState({ imgs, files });
		onChange && onChange(files, 'remove', key);
	}
	addImage = ( dataURL, file ) =>{
		let { imgs, files } = this.state;
		let { onChange } = this.props;
		let backgroundImage = `url(${ dataURL })`;
		imgs.push({ backgroundImage });
		files.push( file );
		// console.log(imgs);
		this.setState({ imgs, files });
		onChange && onChange(files, 'add');
	}
}

export default ImagePicker;