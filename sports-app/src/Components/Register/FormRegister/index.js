import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../../Util/Form/Checkbox/checkbox'
import Radio from '../../Util/Form/Radio/radio'
import Input from '../../Util/Form/Input/input'

const FormRegister = ({ handleRegisterUser }) => (
    <section className='form-register' onSubmit={handleRegisterUser}>
      <div className='separator'><hr className='line' /></div>
      <form>
        <div className='fields'>
            <div className='field'>
                <Input title='Username' type='text' name='username' id='username' className='help' msg='Insert Username login' required={true} />
            </div>

            <div className='field'>
                <Input title='City' type='text' name='city' id='city' className='help' msg='Insert your city' required={false}/>
            </div>

            <div className='field'>
                <Input title='Name' type='text' name='name' id='name' className='help' msg='Insert your name' required={true} />
            </div>

            <div className='field'>
                <label>Ridein group?</label>
                <Radio id='radiobox_1' className='radiobox' name='group' value='Always' />
                <Radio id='radiobox_2' className='radiobox' name='group' value='Sometimes' />
                <Radio id='radiobox_3' className='radiobox' name='group' value='Never' />
            </div>

            <div className='field'>
                <Input title='E-Mail' type='email' name='email' id='email' className='help' msg='Insert valid e-mail' required={true}/>
            </div>

            <div className='field'>
                <label>Days of the week</label>
                <Checkbox id='checkbox_1' className='checkbox' name='week' value='Sun' />
                <Checkbox id='checkbox_2' className='checkbox' name='week' value='Mon' />
                <Checkbox id='checkbox_3' className='checkbox' name='week' value='Tue' />
                <Checkbox id='checkbox_4' className='checkbox' name='week' value='Web' />
                <Checkbox id='checkbox_5' className='checkbox' name='week' value='Thu' />
                <Checkbox id='checkbox_6' className='checkbox' name='week' value='Fri' />
                <Checkbox id='checkbox_7' className='checkbox' name='week' value='Sat' />
            </div>

            <div className='field'>
                <button type='submit' className='btn btn-save'>Save</button>
                <button className='btn btn-discard' type="reset">Discard</button>
            </div>


        </div>
      </form>
    </section>
)

FormRegister.propTypes = {
  handleRegisterUser: PropTypes.func.isRequired,
}

export default FormRegister
