    /* This example requires Tailwind CSS v2.0+ */
    import { Fragment } from 'react'
    import { Disclosure, Menu, Transition } from '@headlessui/react'
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
    
    const user = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
      const navigation = [
        { name: 'Home', href: './', current: false },
        { name: 'Flower', href: 'Flower', current: false },
       
      ]
      const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
      ]
    
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
    export default function Example() {
    return (
        <Disclosure as="nav" className="bg-cyan-700">
              {({ open }) => (
                <>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <h1 className='text-white font-bold text-3xl'>SummerFlower's</h1>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-white hover:bg-cyan-700 hover:text-white',
                                  'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="-mr-2 flex md:hidden">
                       
                      </div>
                    </div>
                  </div>
                 
    
                  
                </>
              )}
            </Disclosure>
            
    )
    }