/*
*  Name :   HorizontalLayout.jsx
*  Location : /imports/UI/Layouts
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: 0.0.1
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/

class HorizontalLayout extends React.Component{
    constructor(props){
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
        this.countMyChildern = this.countMyChildern.bind(this);
    }


    renderChildren() {
        var count=this.countMyChildern();
        var bootclass="col-md-1";
        if(count>12)
            console.log("Max number of element exceeded!\n Due to Bootstrap grid system max number of elements permit are 12.\nElements inserted = "+count);
        else{
            var value=Number((12/count).toFixed(0));
            bootclass="col-md-"+value;
        }
        var classes = classNames(bootclass);
        return React.Children.map(this.props.children, child => {
            return (<ContainedElement classNames={classes}>{child}</ContainedElement>);
        });
    }

    countMyChildern(){
            return React.Children.count(this.props.children);
    }


    render(){
        var classes = classNames("row",this.props.classNames);
        return(
            <div className={classes}>
                {this.renderChildren()}
            </div>
        );
    }
}

export default HorizontalLayout;
