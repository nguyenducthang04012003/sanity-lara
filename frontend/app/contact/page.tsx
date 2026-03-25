import ContactClient from './ContactClient'
import {getContactInfo} from '@/sanity/lib/api'

export default async function ContactPage() {
  const contactsData = await getContactInfo()

  // console.log('contactsData', contactsData)

  return <ContactClient contactsData={contactsData} />
}
